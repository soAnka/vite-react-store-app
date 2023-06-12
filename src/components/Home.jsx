import { Link } from "react-router-dom";
import Banner from "./Banner";
import { MdOutlineLocalShipping } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Banner
        photo="bg-banner-main"
        title="All in One Place"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 items-center justify-center gap-2 p-20 lg:grid-cols-12 ">
          <div className="col-start-1 col-end-1 flex w-full flex-col items-center justify-center rounded-xl p-4 shadow-xl lg:col-start-2 lg:col-end-5">
            <MdOutlineLocalShipping fontSize={22} color="orange" />
            <h4 className="p-2 text-lg">Free Shipping</h4>
            <p className="text-center font-thin text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="col-start-1 col-end-1 flex w-full flex-col items-center justify-center rounded-xl p-4 shadow-xl lg:col-start-5 lg:col-end-9">
            <MdOutlineLocalShipping fontSize={22} color="orange" />
            <h4 className="p-2 text-lg">Top Products</h4>
            <p className="text-center font-thin text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="col-start-1 col-end-1 flex w-full flex-col items-center justify-center rounded-xl p-4 shadow-xl lg:col-start-9 lg:col-end-12">
            <MdOutlineLocalShipping fontSize={22} color="orange" />
            <h4 className="p-2 text-lg">100% Satisfaction</h4>
            <p className="text-center font-thin text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <button>
          <Link to="/products" className="text-blue-500">
            START SHOPPING NOW
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
