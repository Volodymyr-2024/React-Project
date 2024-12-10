import { useNavigate } from "react-router-dom";
import styles from "./Promotions.module.css";

function Promotions() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/allsales");
  };

  return (
    <div className={styles.container}>
      <h1>
        Amazing Discounts <br />
        on Pets Products!
      </h1>
      <button onClick={handleClick}>Check out</button>
    </div>
  );
}

export default Promotions;
