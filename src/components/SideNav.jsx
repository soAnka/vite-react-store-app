import { all } from "../store/categorySlice";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const SideNav = ({ userCategory, setUserCategory }) => {
  return (
    <>
      <ul className="flex flex-row items-center justify-start bg-slate-100 p-8 xl:flex-col xl:items-start">
        <p className="font-bold">Category</p>
        {categories.map((c) => (
          <li
            className="font-thin text-gray-600"
            key={c}
            onClick={(e) => setUserCategory(all(c))}
          >
            <button
              className={`${c === userCategory ? "active" : ""}`}
              type="button"
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SideNav;
