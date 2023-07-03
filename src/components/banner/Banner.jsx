import styles from "./Banner.module.scss";
import { bImages } from "./bImages"

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <img src={bImages[0]} alt="banner" />
      </div>
      <div className={styles.image}>
        <img src={bImages[1]} alt="banner" />
      </div>
      <div className={styles.image}>
        <img src={bImages[2]} alt="banner" />
      </div>
      <div className={styles.image}>
        <img src={bImages[3]} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
