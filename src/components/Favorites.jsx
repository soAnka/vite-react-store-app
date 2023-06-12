import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import Banner from "./Banner";

const Favorites = () => {
  const favProducts = useSelector((state) => state.products);
  const favProductsList =
    favProducts.favProducts !== undefined && favProducts.favProducts.length;

  return (
    <div>
      <Banner
        photo="bg-banner-favorite"
        title="Your Best Products Saved!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <div className="products col-span-12 h-screen p-20 sm:col-span-12 xl:col-span-9">
        {favProductsList ? (
          <ProductsList
            products={favProducts.favProducts}
            userCategory="Saved Favorites"
            loading={false}
          />
        ) : (
          <p className="text-center text-base font-thin">
            You don't have have anything saved yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
