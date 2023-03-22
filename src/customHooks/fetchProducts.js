const fetchProducts = async ({ queryKey }) => {
  const category = queryKey[1];
  const productsUrl = "https://fakestoreapi.com/products/";

  let res =
    category === "all"
      ? await fetch(productsUrl)
      : await fetch(productsUrl + `/category/${category}`);
  if (!res.ok) {
    throw new Error(
      `There was a problem with fetching products of ${category} category`
    );
  }
  const data = await res.json();
  return data;
};

export default fetchProducts;
