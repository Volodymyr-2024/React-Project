import { useEffect, useState } from "react";
import styles from "./Select.module.css";
import pointer from "../../assets/pointer.svg";

const options = ["by default", "newest", "price: high-low", "price: low-high"];

function Select({ selectedOption, handleParams }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleParams("sort", selected);
  }, [selected, selectedOption]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.custom_select} ${isOpen ? styles.open : ""}`}
        onClick={toggleOptions}
      >
        <div className={styles.selected_option}>
          {selectedOption}
          <img
            src={pointer}
            alt="pointer"
            className={`${styles.image} ${isOpen ? styles.rotated : ""}`}
          />
        </div>

        {isOpen && (
          <div className={styles.options_container}>
            {options.map((option, index) => (
              <div
                key={index}
                value={option}
                id={styles.option}
                className={option === selectedOption ? styles.selected : ""}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
