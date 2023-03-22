import Product from "./Product";

const ProductsList = ({ products, loading, error, userCategory }) => {
  if (!products && !loading) {
    return <h3>No products found</h3>;
  } else if (!products && loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="products_results">
      <div className="products_results_informations">
        <p className="products_category">
          Category: <span>{userCategory}</span>
        </p>
      </div>
      <div className="products_container">
        <p>{loading ? "loading" : null}</p>
        <p>{error ? "Sorry.Something went wrong." : null}</p>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
