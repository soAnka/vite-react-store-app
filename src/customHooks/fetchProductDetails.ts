import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { Product } from "../types/APIResponsesTypes";

const fetchProductDetails: QueryFunction<Product, QueryKey> = async ({
  queryKey,
}) => {
  const id = queryKey[1] as number;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error(`There was a problem with details/${id}`);
  }
  return res.json();
};

export default fetchProductDetails;
