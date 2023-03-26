import Product from "./Product";

const ProductsList = ({ products, loading, userCategory }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <div className="flex w-full items-center justify-between py-10 px-10">
        <p className="text-2xl font-extrabold">
          {userCategory === "Saved Favorites" ? "" : "Category:"}{" "}
          <span className="font-thin italic text-blue-800">{userCategory}</span>
        </p>
        <p className="text-blue-800">
          <span>
            {products?.length > 1
              ? `${products.length} products`
              : `${products.length} product`}{" "}
          </span>
        </p>
      </div>
      <p>{loading ? "loading" : null}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
