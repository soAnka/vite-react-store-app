import useProducts from "../customHooks/useProducts";
import ErrorBoundary from "./ErrorBoundary";
import ProductsList from "./ProductsList";
import { useSelector, useDispatch } from "react-redux";
import SideNav from "./SideNav";
import Banner from "./Banner";
import ErrorComponent from "./ErrorComponent";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Search = () => {
  const userCategory = useSelector((state) => state.category.category);
  const { data, isLoading } = useProducts(userCategory);
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const favProductsList =
    allProducts.favProducts !== undefined && allProducts.favProducts.length;

  return (
    <>
      <Banner
        photo="bg-banner-main"
        title="Today's Special Offer!"
        description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <div className="h-screen p-20">
        <p className="text-blue-800"></p>
        <div className="grid grid-cols-12 gap-8 ">
          <div className="menu col-span-12 my-8 sm:col-span-12 xl:col-span-3">
            <SideNav userCategory={userCategory} setUserCategory={dispatch} />
          </div>
          <div className="products col-span-12 sm:col-span-12 xl:col-span-9">
            {favProductsList ? (
              <ProductsList
                products={allProducts.favProducts}
                userCategory="Saved Favorites"
                loading={false}
              />
            ) : null}
            <ProductsList
              products={data}
              loading={isLoading}
              userCategory={userCategory}
              setUserCategory={dispatch}
            />
          </div>
        </div>
      </div>
    </>
  );
};
function SearchErrorB() {
  return (
    <ErrorBoundary errorMessage={<ErrorComponent />}>
      <Search />
    </ErrorBoundary>
  );
}

export default SearchErrorB;
