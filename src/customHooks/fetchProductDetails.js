const fetchProductDetails = async ({ queryKey }) => {
  const id = queryKey[1];

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error(`There was a problem with details/${id}`);
  }
  const data = res.json();
  return data;
};

export default fetchProductDetails;
