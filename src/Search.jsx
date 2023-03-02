const Search = () => {
  const val = "coala";

  return (
    <div>
      <form>
        <label htmlFor="nature">
          <input id="nature" value={val} placeholder="Nature" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Search;
