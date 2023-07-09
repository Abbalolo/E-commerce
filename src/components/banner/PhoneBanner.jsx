
import styles from "./phoneBanner.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { phone } from "../../pages/smartPhone/smartPhoneData";


function PhoneBanner() {
  return (
    <div className={styles.phoneBanner}>   
        {phone.slice(0, 10).map((item) => {
            return (
                
                <div className={styles.phoneContainer} key={item.id}>
                    <Link className={styles.links} to={`/smartPhone/${item.id}`}>
                    <div className={styles.image}>
                        <img className={styles.links} src={item.image} alt="imag" />
                    </div>
                    <div className={styles.content}>
                        
                    <span className={styles.links}>{item.name}</span>
                    <span className={styles.links}>#{item.price}</span>
                    </div>
                    </Link>
                </div>
            )
        })}
        <div className={styles.more}>
        <Link to="/smartPhone">See all SmartPhone <FaArrowRight/></Link>
        </div>
    </div>
  );
}

export default PhoneBanner;
