import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries
} from "@devexpress/dx-react-chart-material-ui";

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: Math.sin(i) / i, argument: i });
  }

  return data;
};
const data = generateData(2, 12, 1);

class LineChart extends React.Component {
	render(){
		return (
			<Paper>
				<Chart data={data} width={650} height={300}>
					<ArgumentAxis  />
					<ValueAxis />

					<SplineSeries valueField="value" argumentField="argument" />
				</Chart>
			</Paper>
		);
	}
}

export default LineChart;