import { VegaLite } from "react-vega";
import { useState, useEffect } from "react";
import adultspec from "./assets/chart_adult.json"; // doppel definition spec lediglich wegen y-Achsen skalierung
import childspec from "./assets/chart_child.json"; // aufgrund von vega-react problemen so gelöst, andere möglichkeiten vorhanden

export const MainArea = ({ year, location_id, group }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/v1/year/${year}/location_id/${location_id}/group/${group}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => console.error("Fetch failed:", err));
  }, [year, location_id, group]);

  return (
    <main>
      <VegaLite
        spec={group === "adult" ? adultspec : childspec}
        data={{ table: data }}
      ></VegaLite>
    </main>
  );
};
