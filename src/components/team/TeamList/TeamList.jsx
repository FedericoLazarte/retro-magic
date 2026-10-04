import Team from "../Team/Team.jsx";
import styles from "./TeamList.module.css";

function TeamList({ employees }) {
  return (
    <div className={styles.container}>
      {employees.map((e) => (
        <Team key={e.id} {...e} />
      ))}
    </div>
  );
}

export default TeamList;
