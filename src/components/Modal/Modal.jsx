import styles from "./Modal.module.css";
import modal_x from "../../assets/modal_x.svg";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";
import { useEffect, useState } from "react";

function Modal({ message, onClose }) {
  const dispatch = useDispatch();
  const [isModalClosed, setIsModalClosed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isModalClosed]);

  const cleanCart = () => {
    dispatch(deleteCart());
    onClose();
    setIsModalClosed(true);
  };

  return (
    <div className={styles.container}>
      {message ? (
        <div className={styles.modal}>
          <h3>Congratulations!</h3>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
          <button onClick={cleanCart} className={styles.closeButton}>
            <img src={modal_x} alt="button_modal_close" />
          </button>
        </div>
      ) : (
        <div className={styles.modal}>
          <p>Failed to submit the order. Please try again.</p>
          <button onClick={cleanCart} className={styles.closeButton}>
            <img src={modal_x} alt="button_modal_close" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
