import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { phone } from "./smartPhoneData";
import styles from "./smartPhone.module.scss";
import SortItems from "../../components/phoneHeader/SortItems";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import ItemFilter from "./ItemFilter";




function SmartPhone() {
  

  const [filteredData, setFilteredData] = useState(phone);
  const [searchPhone, setSearchPhone] = useState("");
  const [searchRam, setSearchRam] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [radio, setRadio] = useState("");
  const [phoneRam, setPhoneRam] = useState("");
  const [block, setBlock] = useState("false");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);
  const dispatch = useDispatch();
  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPhone, searchRam, currentPage, searchPrice]);

  const filterData = () => {
    let filteredResult = phone;

    // Filter by phone
    if (searchPhone) {
      filteredResult = filteredResult.filter((item) => {
        return searchPhone.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(searchPhone);
      });
    }

    if (searchRam) {
      const ramValue = parseInt(searchRam); // Convert searchRam to a number
      filteredResult = filteredResult.filter((item) => {
        return isNaN(ramValue) || ramValue === 0 ? item : item.ram === ramValue;
      });
    }
    if (searchPrice) {
      const minValue = parseInt(min);
      const maxValue = parseInt(max);
      filteredResult = filteredResult.filter((item) => {
        return isNaN(minValue) ||
          isNaN(maxValue) ||
          (minValue === 0 && maxValue === 0)
          ? item
          : (minValue === 0 && maxValue === 0) ||
              (item.price >= minValue && item.price <= maxValue);
      });
      setFilteredData(filteredResult);
    }
    
    const lastPageIndex = currentPage * postPerPage;
    const firstPageIndex = lastPageIndex - postPerPage;
    const currentPost = filteredResult.slice(firstPageIndex, lastPageIndex);

    setFilteredData(currentPost);
    
    
   
  };
  

  const handleRam = (e) => {
    e.preventDefault();
    setSearchRam(phoneRam);
  };

  const searchRadioItem = (e) => {
    e.preventDefault();
    setSearchPhone(radio);
  };
  const searchRadioPrice = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    setSearchPrice(filteredData);
  };

  const handleMinVale = (e) => {
    const value = parseInt(e.target.value);
    setMin(value);
  };
  const handleMaxVale = (e) => {
    const value = parseInt(e.target.value);
    setMax(value);
  };

  const removePrice = () => {
    setMax("");
    setMin("");
  };
  const removeRam = () => {
    setPhoneRam("")
  };
  const removePhone = () => {
    setRadio("")
  };

  const handleLayOut = () => {
    setBlock(!block);
  };

  return (
    <div className={styles.pageFilter}>
      <ItemFilter
      removePhone={removePhone}
      removeRam={removeRam}
      searchRadioItem={searchRadioItem}
      searchPhone={searchPhone}
      setSarchPhone={setSearchPhone}
      setPhoneRam={setPhoneRam}
      setRadio={setRadio}
      radio={radio}
      searchRadioPrice={searchRadioPrice}
      searchRam={searchRam}
      min={min}
      max={max}
      handleMaxVale={handleMaxVale}
      setSearchRam={setSearchRam}
      handleMinVale={handleMinVale}
      removePrice={removePrice}
      handleRam={handleRam}
      phoneRam={phoneRam}
      />
      <div className={styles.smartPhones}>
        <div className={styles.sortContainer}>
          <SortItems
            handleLayOut={handleLayOut}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
            handleMinVale={handleMinVale}
          />
        </div>

        <div className={block ? `${styles.devices}` : `${styles.block}`}>
          {filteredData.map((items) => {
            return (
              <div
                className={block ? `${styles.allDevice}` : `${styles.flex}`}
                key={items.id}
              >
                <Link to={`/smartPhone/${items.id}`}>
                  <div className={styles.phoneImage}>
                    <img
                      className={styles.image}
                      src={items.image}
                      alt={items.name}
                    />
                  </div>
                </Link>
                <div className={styles.phoneDesc}>
                  <h4>{items.title}</h4>

                  <p>#{items.price}</p>
                  <button
                    onClick={() => {
                      dispatch(addToCart(items));
                     
                    }}
                    className={styles.addButton}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          totalPosts={phone.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default SmartPhone;
