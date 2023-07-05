
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import styles from './cart.module.scss';

function Cart() {
  const { products, total, amount } = useSelector((state) => state.cart);

  return (
    <section className={styles.cartContainer}>
    <div>
      <h2>My product list </h2>
      {amount > 0 && (
        <div>
          {products.map((item) => (
            <CartProduct
              key={new Date().getTime() + Math.random()}
              name={item.name}
              price={item.price}
              image={item.image}
              amount={item.amount}
            />
          ))}
        </div>
      )}

      {amount > 0 ? (
        <div className={styles.totalCon}>
          <p className={styles.total}>Total</p>
          <p className={styles.totalPrice}>#{total.toFixed(2)}</p>
        </div>
      ) : (
        <p className={styles.empty}>Your Cart is empty</p>
      )}

      <Link className={styles.backtohome} to="/">
        Back to product page
      </Link>
    </div>
    </section>
  );
}

export default Cart;
