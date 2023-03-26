import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./components/ProductDetails";
import { Link } from "react-router-dom";
import FavProductContext from "./FavProductContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const favProducts = useState([]);

  return (
    <div className="m-0 h-full p-0">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <FavProductContext.Provider value={favProducts}>
            <div className="m-0 bg-blue-800 p-20 text-center text-2xl text-white">
              <Link to="/">The Store</Link>
            </div>
            <Routes>
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="/" element={<Search />} />
            </Routes>
          </FavProductContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);
