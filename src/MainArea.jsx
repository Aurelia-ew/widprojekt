import { VegaEmbed } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import spec from "./assets/mychart.json"; //entweder mychart oder aurelias-chart...
//import dataFile from "./assets/Aurelia_Teildatensatz.json";

//const data = dataFile.datasets;

export const MainArea = (data) => {
  return (
    <main>
      <VegaEmbed spec={spec} data={data}></VegaEmbed>
      <p>MainArea, wird aber glaubs nanned richtig ahzeigt...</p>
    </main>
  );
};
