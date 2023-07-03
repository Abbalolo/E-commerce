import Banner from "../../components/banner/Banner";
import PhoneBanner from "../../components/banner/PhoneBanner";
import PhoneBrand from "../../components/phoneBrand/PhoneBrand";
import Slider from "../../components/slider/Slider";
import styles from "./Home.module.scss";
import Filter from "../../components/filter/Filter"
function Home() {
  return (
    <div className={styles.home}>
        
      <div className={styles.filter}>
        <Filter/>
      </div>
      <div className={styles.slidebanner}>
        <Slider />
      </div>
      <div className={styles.smallbanner}>
        <Banner />
      </div>
      <div className={styles.productpage} >
        <PhoneBrand />
        <PhoneBanner />
      </div>
    </div>
  );
}

export default Home;
