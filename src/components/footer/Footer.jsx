import { FaFacebookF, FaYoutube} from "react-icons/fa"
import { BsInstagram, BsTwitter, BsAndroid2, BsApple } from "react-icons/bs"
import { Link } from "react-router-dom"
import styles from "./footer.module.scss"


const date = new Date()
const year = date.getFullYear()

function Footer() {

  return newFunction()

  function newFunction() {
    return (
      <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutShopnow}>
          <h3>About ShopNow</h3>
          <p><Link to="#">Contact Us</Link></p>
          <p><Link to="#">About Us</Link></p>
          <p><Link to="#">Careers</Link></p>
          <p><Link to="#">Terms & Conditions</Link></p>
        </div>
        <div className={styles.payment}>
          <h3>Payment</h3>
          <p><Link to="#">Wallet</Link></p>
          <p><Link to="#">Mastercard</Link></p>
          <p><Link to="#">Verve</Link></p>
          <p><Link to="#">Visa</Link></p>
        </div>
        <div className={styles.moreInfo}>
          <h3>More Info</h3>   
          <p><Link to="#">Site Map</Link></p>
          <p><Link to="#">Track My Order</Link></p>
          <p><Link to="#">Privacy Policy</Link></p>
        </div>
        <div className={styles.downloadConnect}>
          <h3>DOWLOAD & CONNECT WITH US</h3>
          <div className={styles.download}>
            <div className={styles.apple}>
              <div className={styles.appleIcon}><BsApple style={ {fontSize: "30px", color: "white"}}/></div>
              <div className={styles.appleFlex}>
              <span style={ {fontSize: "13px"}}>Download on</span>
              <span className={styles.appleIcon}>App Store</span>
              </div>
            </div>
            <div className={styles.apple}>
            <div className={styles.androidIcon}><BsAndroid2 style={ {fontSize: "30px", color: "white"}}/></div>
            <div className={styles.appleFlex}>
              <span style={ {fontSize: "13px"}}>Download on</span>
              <span className={styles.appleIcon}>Google Play</span>
            </div>
            </div>
          </div>
          <div className={styles.connect}>
            <div className={styles.facebook}><FaFacebookF style={ {fontSize: "25px", color: "white"}}/></div>
            <div className={styles.instagram}><BsInstagram style={ {fontSize: "25px", color: "white"}}/></div>
            <div className={styles.twitter}><BsTwitter style={ {fontSize: "25px", color: "white"}}/></div>
            <div className={styles.youtube}><FaYoutube style={ {fontSize: "25px", color: "white"}}/></div>
          </div>
        </div>
      </div>
        &copy; {year} All Rights Reserved
      </div>
    )
  }
}

export default Footer