import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useProducts from "../customHooks/useProducts";
import ErrorBoundary from "./ErrorBoundary";
import ProductsList from "./ProductsList";
import SearchForm from "./SearchForm";
import FavProductContext from "../FavProductContext";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Search = () => {
  const [userCategory, setUserCategory] = useState("all");
  const { data, isLoading } = useProducts(userCategory);
  const [favProducts] = useContext(FavProductContext);
  return (
    <div className="h-screen p-20">
      <SearchForm
        userCategory={userCategory}
        setUserCategory={setUserCategory}
      />
      {favProducts.length ? (
        <ProductsList
          products={favProducts}
          userCategory="Saved Favorites"
          loading={false}
        />
      ) : null}
      <ProductsList
        products={data}
        loading={isLoading}
        userCategory={userCategory}
      />
    </div>
  );
};
function SearchErrorB() {
  return (
    <ErrorBoundary
      errorMessage={
        <h4>
          {" "}
          Something went wrong while searching.{" "}
          <Link to="/">Go back to main page</Link>
        </h4>
      }
    >
      <Search />
    </ErrorBoundary>
  );
}

export default SearchErrorB;
