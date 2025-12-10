import { VegaLite } from "react-vega"; // VegaEmbed anstatt VegaLite (isch es echts Problem gsii...)
import spec from "./assets/aurelias-chart_neu.json"; // aurelias-chart_neu

export const MainArea = (data) => {
  console.log(data); //de chunnt na weg...

  return (
    <main>
      <VegaLite spec={spec} data={data}></VegaLite>
    </main>
  );
};
