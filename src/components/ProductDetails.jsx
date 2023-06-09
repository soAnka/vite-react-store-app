import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFav, addToCart } from "../store/productsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "../customHooks/fetchProductDetails";
import { SlBasketLoaded } from "react-icons/sl";
import { MdStarRate } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ErrorBoundary from "./ErrorBoundary";
import DetailsInfo from "./DetailInfo";
import Modal from "./Modal";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["details", id], fetchProductDetails);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setQuantity(+e.target.value);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = data;
  const rateNum = Math.round(product.rating.rate);

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
          <div className="px-4">
            <div className="flex">
              {[...Array(5)].map((rateStar, index) => {
                return (
                  <MdStarRate
                    key={index}
                    color={`${index < rateNum ? "orange" : "gray"}`}
                    outline="orange"
                  />
                );
              })}
              <p className="ml-2 text-xs">{product.rating.count} reviews</p>
            </div>
          </div>
          <p className="mt-4 p-4 text-base font-thin">{product.description}</p>
          <DetailsInfo />
          <p className="p-4 text-xl font-bold">${product.price}</p>
          <input
            min={1}
            type="number"
            value={quantity}
            onChange={onChangeHandler}
            className="ml-4"
          />
          {showModal ? (
            <Modal>
              <div>
                <h2>
                  Would you like to save this product to your Favorites List?
                </h2>
                <div>
                  <button
                    className="btn add"
                    onClick={() => {
                      dispatch(addToFav({ ...product, isFav: true }));
                      navigate("/");
                    }}
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
          <div className="ml-4 mt-8">
            <button
              className="btn add"
              onClick={() => {
                dispatch(addToCart({ ...product, quantity })), navigate("/");
              }}
            >
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
