import { VegaLite } from "react-vega";
import { useState, useEffect } from "react";
import adultspec from "./assets/chart_adult.json"; // aurelias-chart_neu
import childspec from "./assets/chart_child.json";

export const MainArea = ({ year, location_id, group }) => {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch(
        `http://localhost:8000/api/v1/year/${year}/location_id/${location_id}/group/${group}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`); //erstellt jsx error
          }
          return res.json();
        })
        .then((res) => setData(res))
        .catch((err) => console.error("Fetch failed:", err)); //gibt jsx error aus
    },
    [year, location_id, group] // Abhängigkeitsliste
  );

  return (
    //main container nur mit style funktion (App.css)-> eher vermeiden
    <main>
      <VegaLite
        spec={group === "adult" ? adultspec : childspec}
        data={{ table: data }}
      ></VegaLite>
    </main>
  );
};
