import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import styles from "./searchBar.module.scss";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({ filteredData, setFilteredData, currentPost }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    handlePhone();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, currentPost]);

  const handlePhone = () => {
    let filteredResult = filteredData;
    if (searchInput) {
      // eslint-disable-next-line react/prop-types
      filteredResult = filteredData.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
    setFilteredData(filteredResult);
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePhone();
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search anything"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className={styles.icons}>
            {searchInput && <FaTimes onClick={clearSearch} />}
            <FiSearch className={styles.searchIcon} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
