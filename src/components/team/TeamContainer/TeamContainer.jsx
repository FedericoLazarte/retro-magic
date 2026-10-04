import { useEffect, useState } from "react";
import TeamList from "../TeamList/TeamList";

function TeamContainer({ title }) {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/employee/employees.json");

        if (!response.ok) {
          throw new Error(
            "No se ha podido cargar la información de los empleados.",
          );
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
