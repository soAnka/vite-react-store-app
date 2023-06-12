import Product from "./Product";
import Spinner from "./Spinner";

const ProductsList = ({ products, loading, userCategory, setUserCategory }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="my-8">
      <div className="my-2 flex items-center justify-between text-2xl font-extrabold">
        <span className="font-thin italic text-blue-800">{userCategory}</span>
        <span className="text-sm font-semibold text-gray-500">
          {products.length} products
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
