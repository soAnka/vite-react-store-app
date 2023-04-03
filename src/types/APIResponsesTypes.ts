export type Category =
  | "all"
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "Saved Favorites";

export type Product = {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  price: number;
  isFav?: boolean;
};

export type isLoading = {
  isLoading: boolean;
};
export interface IProductsInCategoryResponse {
  data: Product[];
}
export interface IProductDetailsAPI {
  data: Product;
}
export interface IProductApiResponse {
  data: Product[];
  isLoading: boolean;
}
