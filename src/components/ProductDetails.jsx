import { useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "../customHooks/fetchProductDetails";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import DetailsInfo from "./DetailInfo";
import FavProductContext from "../FavProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["details", id], fetchProductDetails);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [favProduct, setFavProduct] = useContext(FavProductContext);
  console.log(favProduct);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = data;

  return (
    <div className="products_container product">
      <div className="card">
        <div
          className="card_image"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="card_body">
          <p className="title">{product.title}</p>
          <p>
            {product.rating.rate} count: {product.rating.count}
          </p>
          <p className="description">{product.description}</p>
          <DetailsInfo />
          <p className="price">${product.price}</p>
          {showModal ? (
            <Modal>
              <div className={`${showModal ? "modal-isOpen" : null}`}>
                <h2>
                  Would you like to save this product to your Favorites List?
                </h2>
                <div className="buttons_container">
                  <button
                    className="modal_btn add"
                    onClick={() => {
                      setFavProduct([
                        ...favProduct,
                        { ...product, isFav: true },
                      ]),
                        navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="modal_btn save"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
          <div className="card_buttons">
            <button className="add">
              <SlBasketLoaded size={18} /> add
            </button>
            <button className="save" onClick={() => setShowModal(true)}>
              <MdOutlineFavoriteBorder size={18} /> save
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
