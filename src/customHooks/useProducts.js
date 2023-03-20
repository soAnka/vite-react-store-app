import { useState, useEffect } from "react";

const locCache = {};
const basicUrl = "https://fakestoreapi.com/products/";

export default function useProducts(category) {
  const [data, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (locCache[category]) {
      setProducts(locCache[category]);
    } else {
      requestProducts();
    }
    async function requestProducts() {
      let res;
      res =
        category === "all"
          ? await fetch(basicUrl)
          : await fetch(basicUrl + `/category/${category}`);

      const dataRes = await res.json();
      locCache[category] = dataRes || [];
      setProducts(locCache[category]);
      setLoading(true);
    }
  }, [category]);

  return [data, loading];
}
