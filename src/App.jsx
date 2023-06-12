import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import DetailsProductErrorB from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import Menu from "./components/Menu";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="m-0 h-full p-0">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Menu />
            {/* <div className="m-0 h-[28rem] w-full text-left  text-black">
              <div className="m-0 h-full w-full bg-[url('./assets/clothing.jpg')] bg-cover bg-center bg-no-repeat ">
                <div className="ml-4 flex h-full flex-col justify-center bg-white/50 p-8 sm:w-full lg:w-2/5">
                  <Link to="/" className="p-4 text-blue-900">
                    The Store
                  </Link>
                  <h4 className="p-4 text-6xl">Today's Special Offer!</h4>
                  <p className="w-3/4 p-4 text-base font-thin text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </div> */}
            <Routes>
              <Route path="/details/:id" element={<DetailsProductErrorB />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);

export default App;
