import { useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../constants/api";
import Stepper from "../Steppers/Stepper";
import { addToCart } from "../../redux/cartSlice";
import Description from "../Description/Description";
import { useState } from "react";

function ProductCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id, 10))
  );

  const [quantity, setQuantity] = useState(1);
  const getProductQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  if (!product) {
    return (
      <p style={{ marginLeft: "40px", fontSize: "24px" }}>Товар не найден!</p>
    );
  }

  const handleAddToCart = () => {
    const total_price = product.discont_price
      ? product.discont_price * quantity
      : product.price * quantity;
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        discount_price: product.discont_price,
        image: product.image,
        quantity: quantity,
        total_price: total_price,
      })
    );
    setQuantity(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <img src={API + product.image} alt="" />
      </div>
      <div className={styles.title_container}>
        <div className={styles.title}>{product.title}</div>
        {product.discont_price ? (
          <div className={styles.price}>
            <h3>${product.discont_price}</h3>
            <h4>${product.price}</h4>
            <div className={styles.discount}>
              -
              {(
                ((product.price - product.discont_price) / product.price) *
                100
              ).toFixed(0)}
              %
            </div>
          </div>
        ) : (
          <h3>${product.price}</h3>
        )}
        <div className={styles.add_to_cart}>
          <Stepper quantity={quantity} readCount={getProductQuantity} />
          <button className={styles.button_cart} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        <Description text={product.description} />
      </div>
    </div>
  );
}

export default ProductCard;
