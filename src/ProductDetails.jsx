import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "./customHooks/fetchProductDetails";
import { SlBasketLoaded } from "react-icons/sl";
import DetailsInfo from "./DetailInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["details", id],
    fetchProductDetails
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Something went wrong</div>;
  }
  const product = data;

  return (
    <div className="card_body">
      <DetailsInfo />
      <p className="title">{product.title}</p>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      <div className="card_buttons">
        <button>
          <SlBasketLoaded size={18} /> add
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
