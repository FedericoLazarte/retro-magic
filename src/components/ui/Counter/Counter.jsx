import Button from "../Button/Button";
import styles from "./Counter.module.css";

function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div className={styles.btnCountContainer}>
      <Button onClick={onDecrease} type="button" disabled={false}>
        -
      </Button>
      <p className={styles.count}>{count}</p>
      <Button onClick={onIncrease} type="button" disabled={false}>
        +
      </Button>
    </div>
  );
}

export default Counter;
