import { useState, useContext, lazy } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "../customHooks/fetchProductDetails";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ErrorBoundary from "./ErrorBoundary";
import DetailsInfo from "./DetailInfo";
import FavProductContext from "../FavProductContext";

const Modal = lazy(() => import("./Modal"));

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["details", id], fetchProductDetails);
  const [showModal, setShowModal] = useState(false);
  const [onList, setOnList] = useState(false);
  const navigate = useNavigate();
  const [favProduct, setFavProduct] = useContext(FavProductContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = data;

  const addFavProduct = (product) => {
    setShowModal(false);
    const isOnList = favProduct.filter((f) => f.title === product.title);
    isOnList.length
      ? setShowModal(false)
      : setFavProduct([...favProduct, { ...product, isFav: true }]),
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
          <p className="px-4">
            {product.rating.rate} count: {product.rating.count}
          </p>
          <p className="p-4 text-base font-thin">{product.description}</p>
          <DetailsInfo />
          <p className="p-4 text-xl font-bold">${product.price}</p>
          {showModal && !onList ? (
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
        <h4>
          {" "}
          Something went wrong. <Link to="/">Go back to main page</Link>
        </h4>
      }
    >
      <ProductDetails />
    </ErrorBoundary>
  );
}

export default DetailsProductErrorB;
