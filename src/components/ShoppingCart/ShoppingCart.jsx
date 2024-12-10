import { useSelector } from "react-redux";
import styles from "./ShoppingCart.module.css";
import CartProduct from "../CartProduct/CartProduct";
import { API, APIPost } from "../../constants/api";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import axios from "axios";
import Modal from "../Modal/Modal";
import { useState } from "react";

const formStyles = {
  padding: "32px 0 0 0",
};

const inputStyles = {
  color: "#282828",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
};

function ShoppingCart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.products || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderSending, setOrderSending] = useState(false);
  const items = cart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cart
    .reduce((total, product) => total + product.total_price, 0)
    .toFixed(2)
    .replace(".", ",");

  const handleContinueShopping = () => {
    navigate("/allproducts");
  };

  const submitCart = async (formData) => {
    const cartData = cart.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      total_price: product.total_price,
    }));

    const dataToSend = {
      ...formData,
      cart: cartData,
      total_price: cart
        .reduce((total, product) => total + product.total_price, 0)
        .toFixed(2),
    };

    try {
      await axios.post(APIPost, dataToSend);
      setOrderSending(true);
      setIsModalVisible(true);
    } catch (error) {
      console.error("Error submitting order:", error);
      setOrderSending(false);
      setIsModalVisible(true);
    }
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <div className={styles.container_message}>
          <h4>Looks like you have no items in your basket currently.</h4>
          <Button
            name="Continue Shopping"
            style={{ width: "313px", marginTop: "32px" }}
            click={handleContinueShopping}
          />
        </div>
      ) : (
        <>
          <div className={styles.container_product}>
            {cart.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                image={API + product.image}
                title={product.title}
                price={product.price}
                discount_price={product.discount_price}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className={styles.container_orders}>
            <div className={styles.orders_title}>
              <h3>Order details</h3>
              <h4>{items} items</h4>
              <div className={styles.price}>
                <h4>Total</h4>
                <h2>${totalPrice}</h2>
              </div>
            </div>
            <Form
              formStyles={formStyles}
              inputStyles={inputStyles}
              buttonName="Order"
              click={submitCart}
            />
          </div>
        </>
      )}
      {isModalVisible && (
        <Modal message={orderSending} onClose={setIsModalVisible} />
      )}
    </div>
  );
}

export default ShoppingCart;
