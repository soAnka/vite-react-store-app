import { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavProductContext from "./FavProductContext";
import { Product } from "./types/APIResponsesTypes";
const DetailsProductErrorB = lazy(() => import("./components/ProductDetails"));
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
  const [favProducts, setFavProduct] = useState([] as Product[] | []);

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <FavProductContext.Provider value={[favProducts, setFavProduct]}>
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
                <Route path="/details/:id" element={<DetailsProductErrorB />} />
                <Route path="/" element={<Search />} />
              </Routes>
            </Suspense>
          </FavProductContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const rootApp = document.getElementById("app");
if (!rootApp) {
  throw new Error("No rootApp found");
}
const container = createRoot(rootApp);
container.render(<App />);
