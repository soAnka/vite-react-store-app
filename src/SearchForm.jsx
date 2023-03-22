const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const SearchForm = ({ userCategory, setUserCategory }) => {
  console.log(userCategory);
  return (
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
    </form>
  );
};
export default SearchForm;
