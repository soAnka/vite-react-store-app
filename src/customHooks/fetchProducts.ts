import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { Category, Product } from "../types/APIResponsesTypes";

const fetchProducts: QueryFunction<Product[], QueryKey> = async ({
  queryKey,
}) => {
  const category = queryKey[1] as Category;
  const productsUrl = "https://fakestoreapi.com/products/";

  const res =
    category === "all"
      ? await fetch(productsUrl)
      : await fetch(productsUrl + `/category/${category}`);
  if (!res.ok) {
    throw new Error(
      `There was a problem with fetching products of ${category} category`
    );
  }
  return res.json();
};

export default fetchProducts;
