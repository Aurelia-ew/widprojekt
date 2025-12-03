import { VegaEmbed } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import spec from "./assets/aurelias-chart_neu.json"; //entweder mychart oder aurelias-chart... fals neu exportiert -> in assets ordner ersetzen
import data from "./assets/Teildatensatz.json";

export const MainArea = () => {
  return (
    <main>
      <VegaEmbed spec={spec} data={data}></VegaEmbed>
      <p>MainArea, wird aber glaubs nanned richtig ahzeigt...</p>
    </main>
  );
};
