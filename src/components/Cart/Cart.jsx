import styles from "./Cart.module.css";
import cart_logo from "../../assets/cart_logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className={styles.cart_container}>
      <Link to="/cart">
        <img src={cart_logo} alt="cart_logo" />
        {totalQuantity > 0 ? (
          <div className={styles.quantity}>{totalQuantity}</div>
        ) : null}
      </Link>
    </div>
  );
}

export default Cart;
