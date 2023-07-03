import { FaBabyCarriage, FaPhoneSquareAlt } from "react-icons/fa"
import styles from "./filter.module.scss"
import {NavLink} from "react-router-dom"
import { MdCable, MdFastfood, MdOutlineComputer, MdOutlineScreenshotMonitor } from "react-icons/md"
import {GiClothes } from "react-icons/gi"
import {TbIroning1 } from "react-icons/tb"

function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.category}>
        <h4>All Categories</h4>
          <ul>
            <li><FaPhoneSquareAlt/><NavLink to="/smartPhone">Phone & Tablet</NavLink></li>
            <li><MdOutlineComputer/><NavLink tp="/">Pc/Laptop</NavLink></li>
            <li><MdOutlineScreenshotMonitor/><NavLink to="/">Led Tv / Televition </NavLink></li>
            <li><MdCable/><NavLink to="/">Accessories</NavLink></li>
            <li><GiClothes/><NavLink to="/">Male/Female Wear</NavLink></li>
            <li><MdFastfood/><NavLink to="/">Food/spicess</NavLink></li>
            <li><FaBabyCarriage/><NavLink to="/">Baby</NavLink></li>
            <li><TbIroning1/><NavLink to="/">Home Appliance</NavLink></li>
          </ul>
      </div>
    </div>
  )
}

export default Filter