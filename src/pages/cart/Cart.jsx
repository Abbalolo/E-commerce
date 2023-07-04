
import {useSelector} from "react-redux"
import CartProduct from "./CartProduct"
import styles from "./cart.module.scss"
import {Link} from "react-router-dom"

function Cart() {
  const {products, total , amount} = useSelector((store) => store.cart)
  return (
    <div>
      {amount > 1 ? 
       <div>
       {products.map((item) =>
         <CartProduct
         key={new Date().getTime + Math.random()}
         name={item.name}
         price={item.price}
         image={item.image}
         amount={item.amount}
         />
       )}
     </div>
      :
      <>
      <p className={styles.empty}>Your Cart is empty</p>
      </>
       }
     {amount > 1 && <div className={styles.totalCon}>
    <p className={styles.total}>Total</p>
    <p className={styles.totalPrice}>#{total.toFixed(2)}</p>
    </div>}
    
    <Link className={styles.backtohome} to="/">Back to product page</Link>
    </div>
  )
}

export default Cart