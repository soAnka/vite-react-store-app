import { useState, lazy, Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import SearchForm from "./SearchForm";
import { Category, Product } from "../types/APIResponsesTypes";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../customHooks/fetchProducts";
import FavProductContext from "../FavProductContext";

const ProductsList = lazy(() => import("./ProductsList"));

const Search = () => {
  const [userCategory, setUserCategory] = useState("all" as Category);
  const data = useQuery<Product[]>(["products", userCategory], fetchProducts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favProducts, setFavProduct] = useContext(FavProductContext);

  return (
    <div className="h-screen p-20">
      <SearchForm
        userCategory={userCategory}
        setUserCategory={setUserCategory}
      />
      <Suspense
        fallback={
          <div>
            <h3>loading...</h3>
          </div>
        }
      >
        {favProducts.length > 0 ? (
          <ProductsList
            products={favProducts}
            userCategory="Saved Favorites"
            loading={false}
          />
        ) : null}
        {data.data && (
          <ProductsList
            products={data.data}
            loading={data.isLoading}
            userCategory={userCategory}
          />
        )}
      </Suspense>
    </div>
  );
};
function SearchErrorB() {
  return (
    <ErrorBoundary
      errorMessage={
        <div>
          {" "}
          Something went wrong while searching.{" "}
          <Link to="/">Go back to main page</Link>
        </div>
      }
    >
      <Search />
    </ErrorBoundary>
  );
}

export default SearchErrorB;
