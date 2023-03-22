import { useState } from "react";
import useProducts from "./customHooks/useProducts";
import ProductsList from "./ProductsList";
import SearchForm from "./SearchForm";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Search = () => {
  const [userCategory, setUserCategory] = useState("all");
  const { data, isLoading, isError } = useProducts(userCategory);

  return (
    <div>
      <SearchForm
        userCategory={userCategory}
        setUserCategory={setUserCategory}
      />
      <ProductsList
        products={data}
        error={isError}
        loading={isLoading}
        userCategory={userCategory}
      />
    </div>
  );
};
export default Search;
