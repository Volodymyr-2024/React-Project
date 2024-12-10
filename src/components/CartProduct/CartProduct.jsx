import Stepper from "../Steppers/Stepper";
import styles from "./CartProduct.module.css";
import x from "../../assets/x.svg";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function CartProduct({ image, title, price, discount_price, quantity, id }) {
  const dispatch = useDispatch();
  function handleDeleteFromCart() {
    dispatch(removeFromCart(id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.container_title}>
        <h6>{title}</h6>
        <div className={styles.container_price}>
          <Stepper quantity={quantity} id={id} updateRedux={true} />
          {discount_price ? (
            <div className={styles.price}>
              <h3>${discount_price * quantity} </h3>
              <h4>${price * quantity}</h4>
            </div>
          ) : (
            <h3>${price * quantity}</h3>
          )}
        </div>
      </div>
      <button className={styles.x} onClick={handleDeleteFromCart}>
        <img src={x} alt="Remove from cart" />
      </button>
    </div>
  );
}

export default CartProduct;
