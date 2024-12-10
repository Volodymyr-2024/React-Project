import { useEffect, useState } from "react";
import styles from "./Stepper.module.css";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/cartSlice";

function Stepper({ quantity, id, updateRedux = false, readCount }) {
  const [count, setCount] = useState(quantity || 1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (readCount) {
      readCount(count);
    }
  }, [count, readCount]);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      if (updateRedux) {
        dispatch(decrementQuantity(id));
      }
    }
  };

  const increment = () => {
    setCount(count + 1);
    if (updateRedux) {
      dispatch(incrementQuantity(id));
    }
  };

  return (
    <div className={styles.stepper}>
      <button className={styles.button} onClick={decrement}>
        <img src={minus} alt="minus sign" />
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.button} onClick={increment}>
        <img src={plus} alt="plus sign" />
      </button>
    </div>
  );
}

export default Stepper;
