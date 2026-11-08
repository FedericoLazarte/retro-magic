import { useEffect, useState } from "react";
import TeamList from "../TeamList/TeamList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore/config";

function TeamContainer({ title }) {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const employeesDB = collection(db, "employees");

    getDocs(employeesDB)
      .then((res) => {
        setEmployees(
          res.docs.map((d) => {
            return { ...d.data(), id: d.id };
          }),
        );
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando los empleados, por favor espere....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>{title}</h2>
      <TeamList employees={employees} />
    </>
  );
}

export default TeamContainer;
