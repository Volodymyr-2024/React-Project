import styles from "./Sorter.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Select from "../Select/Select";
import { useSearchParams } from "react-router-dom";

function Sorter({ discountOff }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams.entries()]);
  const { minPrice, maxPrice, discountOnly, sort } = params;

  function handleParamChange(param, newValue) {
    const updatedParams = { ...params };

    if (newValue === "" || newValue === false || newValue == null) {
      delete updatedParams[param];
    } else {
      updatedParams[param] = newValue.toString();
    }

    setSearchParams(updatedParams);
  }

  return (
    <div
      className={`${styles.container} ${discountOff ? styles.checkout : ""}`}
    >
      <div className={styles.price}>
        <label>
          Price
          <input
            type="number"
            min="0"
            value={minPrice || ""}
            onChange={(e) => {
              handleParamChange("minPrice", e.target.value);
            }}
            placeholder="from"
          />
          <input
            type="number"
            min="0"
            value={maxPrice || ""}
            onChange={(e) => {
              handleParamChange("maxPrice", e.target.value);
            }}
            placeholder="to"
          />
        </label>
      </div>
      {!discountOff && (
        <div className={styles.discount}>
          <label>
            Discounted items
            <input type="checkbox" />
            <Checkbox
              value={discountOnly === "true"}
              handleParams={handleParamChange}
            />
          </label>
        </div>
      )}

      <div className={styles.sorted}>
        <label htmlFor="">Sorted</label>
        <Select
          selectedOption={sort || "by default"}
          handleParams={handleParamChange}
        />
      </div>
    </div>
  );
}

export default Sorter;
