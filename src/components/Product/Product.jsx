import { Link } from "react-router-dom";
import { API } from "../../constants/api";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";

function Product({ product }) {
  const dispatch = useDispatch();
  const [buttonName, setButtonName] = useState("Add to Cart");
  const [buttonDisable, setButtonDisable] = useState(false);

  function handleAddToCart(event) {
    event.stopPropagation();
    const total_price = product.discount_price
      ? product.discount_price
      : product.price;

    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        discount_price: product.discont_price,
        image: product.image,
        quantity: 1,
        total_price,
        created_data: product.createdAt,
      })
    );
    setButtonName("Added");
    setButtonDisable(true);
    setTimeout(() => {
      setButtonName("Add to Cart");
      setButtonDisable(false);
    }, 1000);
  }

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.container_img}>
          <img src={API + product.image} alt={product.title} />
        </div>
        <div className={styles.title_container}>
          <h5>{product.title}</h5>
          <div className={styles.price}>
            {product.discont_price ? (
              <>
                <h3>${product.discont_price}</h3>
                <h4>${product.price}</h4>
              </>
            ) : (
              <h3>${product.price}</h3>
            )}
            {product.discont_price && (
              <div className={styles.discount}>
                -
                {(
                  ((product.price - product.discont_price) / product.price) *
                  100
                ).toFixed(0)}
                %
              </div>
            )}
          </div>
        </div>
      </Link>
      <button
        className={styles.button}
        onClick={handleAddToCart}
        disabled={buttonDisable}
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Product;
