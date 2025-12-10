import { VegaLite } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import { useState, useEffect } from "react";
import spec from "./assets/aurelias-chart_neu.json"; // aurelias-chart_neu

export const MainArea = (year, location_id, group) => {
  const [data, setData] = useState([]);

  useEffect(
    () => {
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
        .catch(
          (err) => console.error("Fetch failed:", err) //(ja, eig redundant zu obe...)
        );
    },
    [year, location_id, group] // Abhängigkeitsliste
  );

  return (
    <main>
      <VegaLite spec={spec} data={{ table: data }}></VegaLite>
    </main>
  );
};
