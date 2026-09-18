import Button from "../button/Button";
import styles from "./Counter.module.css";

function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div className={styles.btnCountContainer}>
      <Button onClick={onDecrease}>-</Button>
      <p className={styles.count}>{count}</p>
      <Button onClick={onIncrease}>+</Button>
    </div>
  );
}

export default Counter;
