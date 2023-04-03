import { createContext, Dispatch, SetStateAction } from "react";
import { Product } from "./types/APIResponsesTypes";

const FavProductContext = createContext<
  [Product[] | [], Dispatch<SetStateAction<Product[] | []>>]
>([
  [
    {
      id: 1,
      title: "title",
      price: 20,
      category: "jewelery",
      description: "lorem ipsum",
      image: "https://i.pravatar.cc",
      isFav: true,
    },
  ],
  () => {},
]);

export default FavProductContext;
