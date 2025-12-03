import { VegaEmbed } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import spec from "./assets/aurelias-chart_neu.json"; // aurelias-chart_neu
//import dataFile from "./assets/Aurelia_Teildatensatz.json";

//const data = dataFile.datasets;

export const MainArea = (data) => {
  return (
    <main>
      <VegaEmbed spec={spec} data={data}></VegaEmbed>
    </main>
  );
};
