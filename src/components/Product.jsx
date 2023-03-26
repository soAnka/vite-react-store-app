import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";

const Product = ({ image, title, id, description, price, isFav }) => {
  const shortDescription = () => {
    let shorten =
      description.length > 50 ? description.substring(1, 100) : null;
    let firstLetter = description.charAt(0).toUpperCase();
    shorten = firstLetter + shorten + "...";
    return shorten;
  };

  return (
    <Link
      to={`/details/${id}`}
      className={`card ${
        isFav ? "favorite" : null
      } m-1 flex h-72 w-full cursor-pointer items-start justify-start border border-l-8 border-indigo-300 bg-white p-2 text-sm tracking-wide transition duration-500 hover:scale-110 `}
      style={{
        boxShadow:
          "6px 6px 12px rgba(112, 108, 149, 0.5),transition: 0.3s ease-in-out",
      }}
    >
      <div
        className="m-1 h-1/2 w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="p-4">
        <p className="text-base font-bold">{title.substring(0, 17)}</p>
        <p className="py-4 text-sm font-thin text-slate-700">
          {shortDescription()}
        </p>
        <p className="text-base font-bold">${price}</p>
        <div className="w-full">
          <button className="btn add">
            <SlBasketLoaded size={18} className="mr-2" /> add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
