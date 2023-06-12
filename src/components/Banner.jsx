import { Link } from "react-router-dom";

const Banner = ({ photo, title, description }) => {
  return (
    <div className="m-0 h-[28rem] w-full text-left  text-black">
      <div
        className={`m-0 h-full w-full ${photo} bg-cover bg-bottom bg-no-repeat`}
      >
        <div className="flex h-full w-full flex-col justify-center bg-white/50 p-8 pl-16 lg:w-3/5 2xl:w-2/5">
          <Link to="/" className="p-4 text-blue-900">
            The Store
          </Link>
          <h4 className="p-4 text-6xl">{title}</h4>
          <p className="w-3/4 p-4 text-base font-thin text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
