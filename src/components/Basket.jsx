import { useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Basket = ({ isOpen, setIsOpen }) => {
  const allProducts = useSelector((state) => state.products.cartProducts);
  const initialValue = 0;
  const total = allProducts?.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    initialValue
  );

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute top-0 right-0 z-10 h-screen w-full flex-col justify-between border border-blue-800 bg-white md:w-128`}
    >
      <div>
        <div className="header flex justify-between px-4 py-8">
          <h4 className="text-xl text-blue-800">Shopping cart</h4>
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoIosCloseCircleOutline size={22} />
          </button>
        </div>

        <ul className=" bg-white">
          {allProducts?.map((cartProduct) => {
            return (
              <li
                key={cartProduct.title}
                className="flex items-center justify-between border-b-[1px] p-6"
              >
                <div className="flex items-center">
                  <img
                    className="border-1 mr-2 w-16  p-2"
                    src={`${cartProduct.image}`}
                  />
                  <p className="w-3/4">
                    {cartProduct.title} x {cartProduct.quantity}
                  </p>
                </div>
                <p className="font-bold">
                  $
                  {Number.parseFloat(
                    cartProduct.price * cartProduct.quantity
                  ).toFixed(2)}
                  {/* ${cartProduct.price * cartProduct.quantity} */}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4">
        <div className="my-8 flex justify-between rounded-md bg-gray-200 p-4 py-8">
          <h3 className="text-md">Order total</h3>
          <p>{Number.parseFloat(total).toFixed(2)}</p>
        </div>
        <div className="btns_container">
          <button className="btn checkout border-blue-800 ">Checkout</button>
          <button className="btn cancel" onClick={() => setIsOpen(!isOpen)}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
