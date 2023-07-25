/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./smartPhone.module.scss";
function ItemFilter({searchRadioItem,searchPhone, setSearchPhone,setRadio,radio,searchRadioPrice,min,max,searchRam,handleMinVale,setSearchRam,handleMaxVale,removePrice,handleRam,setPhoneRam,phoneRam,removeRam, removePhone}) {
  return (
         <div className="filter">
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
          <button onClick={removePhone}>cancle</button>
          <button type="submit">save</button>
        </form>

        <div className={styles.price}>
          <h4>Price</h4>
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
            <button type="submit" onClick={removePrice}>
              Remove
            </button>
            <button type="submit">filter</button>
          </form>
        </div>

        <form onSubmit={handleRam} className={styles.phoneBrandRam}>
          <input
            type="text"
            className={styles.searchRam}
            placeholder="Find your phone ram"
            value={searchRam}
            onChange={(e) => setSearchRam(e.target.value)}
          />
          <div className={styles.allRam}>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value=""
                checked={phoneRam === ""}
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">Show all</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="2"
                checked={phoneRam === "2"}
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">2gb</label>
            </div>

            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="4"
                checked={phoneRam === "4"}
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">4gb</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="6"
                checked={phoneRam === "6"}
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">6gb</label>
            </div>
            <div className={styles.ram}>
              <input
                type="checkbox"
                name="check-button"
                value="8"
                checked={phoneRam === "8"}
                onChange={(e) => setPhoneRam(e.target.value)}
              />
              <label htmlFor="check-button">8gb</label>
            </div>
          </div>
          <button className={styles.button} onClick={removeRam}>
            cancle
          </button>
          <button className={styles.button} type="submit">
            save
          </button>
        </form>
      </div>
  )
}

export default ItemFilter