/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./sortItems.module.scss";
import { SiWindows11 } from "react-icons/si";
import { FaWindowMaximize } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import { phone } from "../../pages/smartPhone/smartPhoneData";

function SortItems({ handleLayOut, currentPost, setFilteredData, filteredData }) {
  const [toggle, setToggle] = useState(false);
  const [totalProduct, setTotalProduct] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSortFilter = () => {
    if (sortOption === "lowHigh") {
      const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
      setFilteredData(sortedData);
    } else if (sortOption === "highLow") {
      const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
      setFilteredData(sortedData);
    }
    
  };

  useEffect(() => {
    const totalProducts = () => {
      const objectLength = Object.keys(phone).length;
      setTotalProduct(objectLength);
      
    };

    handleSortFilter();
    totalProducts();
  }, [filteredData]);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    handleSortFilter()
  };

  const toggleLayOut = () => {
    setToggle(!toggle);
  };

  

  return (
    <div className={styles.sort}>
      <div className={styles.header}>
        <div className={styles.sortItems}>
          <p>Phone & Tablet</p>
          <div>
            Sort by:
            <select value={sortOption} onChange={handleSortOptionChange}>
              <option value="">popularity</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="highLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <SearchBar
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          currentPost={currentPost}
          />
        <div className={styles.gridContainer}>
          <div className={styles.totalProduct}>
            {totalProduct}-SmartPhones
          </div>

          <div onClick={toggleLayOut}>
            {!toggle ? (
              <FaWindowMaximize onClick={handleLayOut} />
            ) : (
              <SiWindows11 onClick={handleLayOut} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortItems;
