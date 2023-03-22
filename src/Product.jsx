import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";

const Product = ({ image, title, id, description, price }) => {
  const shortDescription = () => {
    let shorten =
      description.length > 50 ? description.substring(1, 100) : null;
    let firstLetter = description.charAt(0).toUpperCase();
    shorten = firstLetter + shorten + "...";
    return shorten;
  };

  return (
    <Link to={`/details/${id}`} className="card">
      <div
        className="card_image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="card_body">
        <p className="title">{title.substring(0, 17)}</p>
        <p className="description">{shortDescription()}</p>
        <p className="price">${price}</p>
        <div className="card_buttons">
          <button>
            <SlBasketLoaded size={18} /> add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
