import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { phone } from "./smartPhoneData";
import styles from "./smartPhone.module.scss";
import SortItems from "../../components/phoneHeader/SortItems";
import Pagination from "../../components/pagination/Pagination";

function SmartPhone() {
  // const [data , setData] = useState(phone)
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
  const [postPerPage] = useState(10);

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
        return  isNaN(minValue) || isNaN(maxValue) || (minValue === 0 && maxValue === 0) ?
        item
        :(minValue === 0 && maxValue === 0) ||
        (item.price >= minValue && item.price <= maxValue)
        
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
    setSearchPrice(filteredData)
    
  };

  const handleMinVale = (e) => {
    const value = parseInt(e.target.value);
    setMin(value)
  }
  const handleMaxVale = (e) => {
    const value = parseInt(e.target.value);
    setMax(value)
   
  }

  const removePrice = () => {
    setMax("")
    setMin("")
  }

  const handleLayOut = () => {
    setBlock(!block);
  };

  return (
    <div className={styles.pageFilter}>
      <div className={styles.filter}>
        <div className={styles.categories}>
          <h4>Categories</h4>
          <ul>
            <li>
              <Link to="/">Mobile Phone</Link>
            </li>
            <li>
              <Link to="/">Mobile Accessories</Link>
            </li>
            <li>
              <Link to="/">Tablet</Link>
            </li>
          </ul>
        </div>

        <form onSubmit={searchRadioItem} className={styles.phoneBrandName}>
          <input
            type="text"
            className={styles.searchPhone}
            placeholder="Find your brand"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
          />

          <div className={styles.allBrand}>
            <div className={styles.phone}>
              <input
                type="radio"
                name="radio-button"
                value=""
                checked={radio === ""}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="radio-button">Show all</label>
            </div>
            <div className={styles.phone}>
              <input
                type="radio"
                name="radio-button"
                value="apple"
                checked={radio === "apple"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="radio-button">Apple</label>
            </div>
            <div className={styles.phone}>
              <input
                type="radio"
                name="radio-button"
                value="samsung"
                checked={radio === "samsung"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="radio-button">Samsung</label>
            </div>
            <div className={styles.phone}>
              <input
                type="radio"
                name="radio-button"
                value="oppo"
                checked={radio === "oppo"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="radio-button">Oppo</label>
            </div>
            <div className={styles.phone}>
              <input
                type="radio"
                name="radio-button"
                value="redmi"
                checked={radio === "redmi"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="radio-button">Redmi</label>
            </div>
          </div>
          <button type="submit">filter</button>
        </form>

        <div className={styles.price}>
          <h4>Price</h4>
          {min}
          {max}
          <form onSubmit={searchRadioPrice}>
            <div className={styles.priceFilter}>
              <input
                type="number"
                className={styles.min}
                placeholder="min"
                value={min}
                onChange={handleMinVale}
              />
              -
              <input
                type="number"
                className={styles.max}
                placeholder="max"
                value={max}
                onChange={handleMaxVale}
              />
            </div>
            <button type="submit" onClick={removePrice}>Remove</button>
            <button type="submit">filter</button>
          </form>
        </div>

        <form onSubmit={handleRam} className={styles.phoneBrandRam}>
          <input
            type="text"
            className={styles.searchRam}
            placeholder="Find your brand"
            value={searchRam}
            onChange={(e) => setSearchRam(e.target.value)}
          />
          <div className={styles.allRam}>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value=""
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">Show all</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="2"
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">2gb</label>
            </div>

            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="4"
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">4gb</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="6"
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">6gb</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="8"
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">8gb</label>
            </div>
          </div>
          <button className={styles.button} type="submit">
            filter
          </button>
        </form>
      </div>

      <div className={styles.smartPhones}>
        <div className={styles.sortContainer}>
          <SortItems
            handleLayOut={handleLayOut}
            currentPost={filteredData}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
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
                <div className={styles.phoneDesc}>
                  
                    <h4>{items.title}</h4>
                  
                  <p>#{items.price}</p>
                </div>
                </Link>
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
