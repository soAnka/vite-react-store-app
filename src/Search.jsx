import { useState } from "react";
import useProducts from "./customHooks/useProducts";
import Product from "./Product";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Search = () => {
  const [userCategory, setUserCategory] = useState("all");
  const [products, loading] = useProducts(userCategory);

  return (
    <div>
      <form>
        <label htmlFor="category">
          Category
          <select
            disabled={categories.length == 0}
            id="category"
            value={userCategory}
            onChange={(e) => setUserCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <div className="products_container">
          <p>{products.length} products</p>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </form>
    </div>
  );
};
export default Search;
