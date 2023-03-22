import fetchProducts from "./fetchProducts";
import { useQuery } from "@tanstack/react-query";

export default function useProducts(category) {
  const resultProducts = useQuery(["products", category], fetchProducts);
  if (resultProducts) {
    return resultProducts;
  } else {
    return [];
  }
}
