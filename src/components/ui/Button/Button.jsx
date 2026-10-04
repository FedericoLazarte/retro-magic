import styles from "./Button.module.css";

function Button({ onClick, children, type, disabled }) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
