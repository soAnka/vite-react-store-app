import Product from "./Product";

const ProductsList = ({ products, loading, userCategory }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="products_results">
      <div className="products_results_informations">
        <p className="products_category">
          {userCategory === "Saved Favorites" ? "" : "Category:"}{" "}
          <span>{userCategory}</span>
        </p>
        <p className="products_num">
          <span>
            {products?.length > 1
              ? `${products.length} products`
              : `${products.length} product`}{" "}
          </span>
        </p>
      </div>
      <div className="products_container">
        <p>{loading ? "loading" : null}</p>
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
