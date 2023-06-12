import { Link, useLocation } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { useState } from "react";
import { useSelector } from "react-redux";
import Basket from "./Basket";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Saved", path: "/favorites" },
];

const Menu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const allProducts = useSelector(
    (state) => state.products.cartProducts.length
  );

  return (
    <>
      <div className="flex justify-between p-6 px-20">
        <p>The Store</p>
        <ul className="flex flex-row">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="px-4 text-sm font-thin text-gray-900"
            >
              <Link
                className={`font-thin text-gray-900 ${
                  item.path === location.pathname ? "active" : ""
                }`}
                to={`${item.path}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="relative z-0" onClick={() => setIsOpen(!isOpen)}>
          <SlBasketLoaded
            size={24}
            className=" mr-7 text-blue-800"
          ></SlBasketLoaded>
          <span className="absolute right-0 top-0 inline-flex items-center rounded-full bg-pink-50 px-3 py-2 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
            {allProducts}
          </span>
        </button>
        <Basket isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
export default Menu;
