import styles from "./Button.module.css";

function Button({ name, style, click }) {
  return (
    <div>
      <button style={style} className={styles.button} onClick={click}>
        {name}
      </button>
    </div>
  );
}

export default Button;
