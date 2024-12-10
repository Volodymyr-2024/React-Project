import styles from "./Discount.module.css";
import discount_image from "../../assets/discount_image.svg";
import Form from "../Form/Form";

function Discount() {
  return (
    <div className={styles.container}>
      <h2>5% off on the first order</h2>
      <div className={styles.form_container}>
        <img src={discount_image} alt="discount_image" />
        <Form />
      </div>
    </div>
  );
}

export default Discount;
