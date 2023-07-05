/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { decreaseAmount, increaseAmount, removeItem } from "../../redux/slice/cartSlice"
import styles from "./cart.module.scss"
import {useDispatch} from "react-redux"


function CartProduct({name, price, image, amount}) {

    const dispatch = useDispatch()
  return (
  
    <div className={styles.cart}>
        <img src={image} alt={name + "smartPhone"} className={styles.cartImg}/>
        <div className={styles.cartPrice}>
            <p>{name}</p>
            <p className={styles.price}>#{price.toFixed(2)}</p>
            <button className={styles.removeProduct} onClick={() => {
                dispatch(removeItem({name}))
            }}>Remove</button>
        </div>
        <div className={styles.amount}>
            <button className={styles.add} onClick={() => {
               if (amount === 1) {dispatch(removeItem({name}))
               return
            }
            dispatch(decreaseAmount({name}))
            }}>-</button>
            <p>{amount}</p>
            <button className={styles.add} onClick={() => {
                dispatch(increaseAmount({name}))
            }}>+</button>
        </div>
    </div>
  )
}

export default CartProduct