import GaugeChart from "react-gauge-chart";

const GraphGaugeChart = () => {
  return (
    <div>
      <GaugeChart
        id="gauge-chart"
        percent={0.8}
        nrOfLevels={3}
        colors={["#FF0000", "orange", "#228B22"]}
      />
    </div>
  );
};

export default GraphGaugeChart;
