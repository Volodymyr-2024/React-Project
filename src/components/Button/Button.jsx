import styles from "./Button.module.css";

function Button({ name, style, click }) {
  return (
    <div>
      <button className={styles.button} style={style} onClick={click}>
        {name}
      </button>
    </div>
  );
}

export default Button;
