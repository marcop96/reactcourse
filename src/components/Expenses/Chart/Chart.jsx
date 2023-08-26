/* eslint-disable react/prop-types */
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = dataPointValues.reduce((prev, next) => prev + next, 0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
