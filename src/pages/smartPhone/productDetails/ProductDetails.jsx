import { Link, useParams} from "react-router-dom"
import { phone } from "../smartPhoneData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";
import styles from "../smartPhone.module.scss";
function ProductDetails() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const  product = phone.find((product) => product.id == productId) ;
     const {name ,title,image} = product;
    return (
    <section className={styles.detailsSec}>
        <h2>products info</h2> 
        <div className={styles.details}> 
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt={name} />
          </div>
         
          <div className={styles.detailsContent}>
          <h5>{name}</h5>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores autem expedita, nobis culpa ipsam praesentium distinctio recusandae consectetur sequi nisi cumque nulla numquam. Atque ea nihil consectetur repellat, at deserunt!</p>
        <button className={styles.addButton}  onClick={() => {
                      dispatch(addToCart(product));
                    }}>Add to Cart</button>
          </div> 
        

        </div>
       
         <Link to="/smartPhone">Back to product page</Link>  
    </section>
  )
}

export default ProductDetails