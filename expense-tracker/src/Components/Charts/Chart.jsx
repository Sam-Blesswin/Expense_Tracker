import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  const datapointValues = props.datapoints.map((data) => data.value);
  const totalMax = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.datapoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
