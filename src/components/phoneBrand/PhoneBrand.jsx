
import styles from "./phoneBrand.module.scss";
import { brandData } from "./BrandData";

function PhoneBrand() {
    
  return (
    <div className={styles.brand}>
      {brandData.map((data, index) => {
        return (
          <div className={styles.phoneBrands} key={index}>
            <img src={data} alt="photo" />
          </div>
        );
      })}
    </div>
  );
}

export default PhoneBrand;
