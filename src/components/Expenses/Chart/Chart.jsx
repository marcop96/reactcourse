/* eslint-disable react/prop-types */
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        />
      ))}{" "}
    </div>
  );
}

export default Chart;
