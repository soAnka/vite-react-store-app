import fetchProducts from "./fetchProducts";
import { useQuery } from "@tanstack/react-query";
import { Category, Product } from "../types/APIResponsesTypes";

export default function useProducts(category: Category) {
  const resultProducts = useQuery<Product[]>(
    ["products", category],
    fetchProducts
  );
  if (resultProducts) {
    return resultProducts;
  } else {
    return [];
  }
}
