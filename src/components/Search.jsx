import { Link } from "react-router-dom";
import useProducts from "../customHooks/useProducts";
import ErrorBoundary from "./ErrorBoundary";
import ProductsList from "./ProductsList";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from "react-redux";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Search = () => {
  const userCategory = useSelector((state) => state.category.category);
  const { data, isLoading } = useProducts(userCategory);
  const favProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="h-screen p-20">
      <SearchForm userCategory={userCategory} setUserCategory={dispatch} />
      {favProducts.favProducts !== undefined &&
      favProducts.favProducts.length ? (
        <ProductsList
          products={favProducts.favProducts}
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
