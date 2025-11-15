import { VegaEmbed } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import daten from "./assets/aurelias-chart.json"; //entweder mychart oder aurelias-chart... fals neu exportiert -> in assets ordner ersetzen

export const MainArea = () => {
  // evtl. {console.log(daten);} zum was testen

  return (
    <main>
      <VegaEmbed spec={daten}></VegaEmbed>
      <p>MainArea, wird aber glaubs nanned richtig ahzeigt...</p>
    </main>
  );
};
