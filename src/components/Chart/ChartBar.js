import "./ChartBar.css";

const ChartBar = (props) => {
  console.log(props.value, props.maxValue, props.label);
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar___label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
