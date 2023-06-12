import { all } from "../store/categorySlice";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const SearchForm = ({ userCategory, setUserCategory }) => {
  return (
    <>
      <ul>
        {categories.map((c) => (
          <li key={c} onClick={(e) => setUserCategory(all(c))}>
            {c}
          </li>
        ))}
      </ul>
      <div></div>
      <form>
        <label htmlFor="category" className="font-light">
          Category
          <select
            className="ml-4 w-60 border border-blue-600 text-blue-800 focus:bg-white"
            disabled={categories.length == 0}
            id="category"
            value={userCategory}
            onChange={(e) => setUserCategory(all(e.target.value))}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
};
export default SearchForm;
