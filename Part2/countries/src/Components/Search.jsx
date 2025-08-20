const Search = ({countryName, handleSearch }) => {
  return (
    <div>
      Find a Country
      <input
        type="text"
        value={countryName}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;