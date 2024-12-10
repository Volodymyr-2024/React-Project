import { Link } from "react-router-dom";
import { API } from "../../constants/api";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();

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
      <button className={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
