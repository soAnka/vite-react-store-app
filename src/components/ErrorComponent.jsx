import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="flex h-screen flex-wrap items-center justify-center bg-blue-200">
      <div
        className={
          " relative m-8 h-128 w-128 rounded-full bg-error-illustration bg-cover bg-center bg-no-repeat"
        }
      >
        <div className="absolute -inset-y-52 right-0 mr-20 mt-10 flex h-96 w-96 flex-col items-center justify-center rounded-full border-2 border-white bg-white/50 p-8 shadow-2xl md:inset-x-96">
          <h1 className="p-4 text-4xl text-blue-800">Oooops!</h1>
          <p className="p-4 text-xl">Sorry, something went wrong...</p>
          <Link to="/">
            Go back to <span className="text-blue-800">HOME</span> page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
