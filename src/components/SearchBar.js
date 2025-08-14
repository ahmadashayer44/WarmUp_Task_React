import searchIcom from "../assets/search.png";
import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="search-container">
      <label for="search">
        <img src={searchIcom} alt="search" className="search-icon" />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Find members"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
