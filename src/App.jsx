import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import FavProductContext from "./FavProductContext";

const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Search = lazy(() => import("./components/Search"));

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="m-0 h-full p-0">
        <QueryClientProvider client={queryClient}>
          <FavProductContext.Provider value={favProducts}>
            <Suspense
              fallback={
                <div>
                  <h3>loading...</h3>
                </div>
              }
            >
              <div className="m-0 bg-blue-800 p-20 text-center text-2xl text-white">
                <Link to="/">The Store</Link>
              </div>
              <Routes>
                <Route path="/details/:id" element={<ProductDetails />} />
                <Route path="/" element={<Search />} />
              </Routes>
            </Suspense>
          </FavProductContext.Provider>
        </QueryClientProvider>
      </div>
    )
  );
};

export default App;
