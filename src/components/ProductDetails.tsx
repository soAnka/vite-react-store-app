import { useState, useContext, lazy } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "../customHooks/fetchProductDetails";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ErrorBoundary from "./ErrorBoundary";
import DetailsInfo from "./DetailInfo";
import FavProductContext from "../FavProductContext";
import { Product } from "../types/APIResponsesTypes";

const Modal = lazy(() => import("./Modal"));

const ProductDetails = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("No id");
  }

  const data = useQuery(["details", id], fetchProductDetails);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const [favProduct, setFavProduct] = useContext(FavProductContext);

  if (data.isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  const product = data.data;

  if (!product) {
    throw new Error("Couldnt find a product");
  }
  const addFavProduct = (product: Product) => {
    const faToAdd = {
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      price: product.price,
      image: product.image,
      isFav: true,
    };

    setFavProduct((prev: Product[] | []) => [...prev, faToAdd]);
    navigate("/");
  };

  return (
    <div className="m-1 flex items-center justify-center">
      <div className="m-4 flex w-4/5 items-start justify-center border-l-8 border-indigo-300 bg-white p-10 text-sm tracking-wide">
        <div
          className="h-96 w-1/2"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-2/5">
          <p className="p-4 text-xl font-bold">{product.title}</p>
          <p className="p-4 text-base font-thin">{product.description}</p>
          <DetailsInfo />
          <p className="p-4 text-xl font-bold">${product.price}</p>
          {showModal ? (
            <Modal>
              <div>
                <h2>
                  Would you like to save this product to your Favorites List?
                </h2>
                <div>
                  <button
                    className="btn add"
                    onClick={() => addFavProduct(product)}
                  >
                    Yes
                  </button>
                  <button
                    className="btn cancel"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
          <div className="m-4">
            <button className="btn add">
              <SlBasketLoaded size={20} className="mr-2" /> add
            </button>
            <button className="btn save" onClick={() => setShowModal(true)}>
              <MdOutlineFavoriteBorder size={20} className="mr-2" /> save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function DetailsProductErrorB() {
  return (
    <ErrorBoundary
      errorMessage={
        <div>
          {" "}
          Something went wrong. <Link to="/">Go back to main page</Link>
        </div>
      }
    >
      <ProductDetails />
    </ErrorBoundary>
  );
}

export default DetailsProductErrorB;
