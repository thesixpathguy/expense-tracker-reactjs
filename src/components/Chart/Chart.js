import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...values);
  console.log(props.dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
