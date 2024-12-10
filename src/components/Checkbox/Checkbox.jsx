import styles from "./Checkbox.module.css";
import checkbox_normal from "../../assets/checkbox_normal.svg";
import checkbox_active from "../../assets/checkbox_active.svg";
import { useEffect, useState } from "react";

function Checkbox({ value, handleParams }) {
  const [isNormal, setIsNormal] = useState(true);

  const toggleCheckbox = () => setIsNormal(!isNormal);

  useEffect(() => {
    handleParams("discountOnly", !isNormal);
  }, [isNormal]);

  return (
    <div className={styles.container}>
      {isNormal ? (
        <img
          className={styles.normal}
          value={value}
          onClick={toggleCheckbox}
          src={checkbox_normal}
          alt="checkbox_image"
        />
      ) : (
        <img
          className={styles.normal}
          value={value}
          onClick={toggleCheckbox}
          src={checkbox_active}
          alt="checkbox_image_activ"
        />
      )}
    </div>
  );
}

export default Checkbox;
