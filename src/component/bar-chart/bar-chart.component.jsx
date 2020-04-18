import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from 'chart.js';

class LineChart extends React.Component {
	
	myChart = null;

	makeChart = (country,timeline) => {
		if(this.myChart !== null){
			this.myChart.destroy();
		}
		const key = Object.keys(timeline.cases);
  	const node = this.node;
		this.myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: key,
        datasets: [
          {
            label: 'Cases',
            data: Object.values(timeline.cases),
            backgroundColor: Array.apply(null, Array(key.length)).map(x => 'rgba(0,0,255,0.1)'),
						borderColor: Array.apply(null, Array(key.length)).map(x => 'rgba(0,0,255,1)'),
            borderWidth: 1
          },
          {
            label: 'Deaths',
            data: Object.values(timeline.deaths),
            backgroundColor: Array.apply(null, Array(key.length)).map(x => 'rgba(255,0,0,0.1)'),
						borderColor: Array.apply(null, Array(key.length)).map(x => 'rgba(255,0,0,1)'),
            borderWidth: 1
          },
          {
            label: 'Reacovered' ,
            data: Object.values(timeline.recovered),
            backgroundColor: Array.apply(null, Array(key.length)).map(x => 'rgba(0,255,0,0.1)'),
						borderColor: Array.apply(null, Array(key.length)).map(x => 'rgba(0,255,0,1)'),
            borderWidth: 1
          }
        ]
      },
			options: {
        title: {
          display: true,
					fontSize: 24,
          text: `${country} Coronavirus Outbreak`
        },
        scales: {
					responsive: true,
					maintainAspectRatio: false,
					yAxes: [{
						type: 'linear',
						stacked: true,
						gridLines: {
							display: true,
							zeroLineColor: 'rgb(0,0,0)',
						},
						ticks: {
							beginAtZero: true,
							maxTicksLimit: 6,
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							display: false,
							zeroLineColor: 'rgb(0,0,0)',
						}
					}]
        }
    }
    });
	}
	
	componentDidUpdate() {
		if(this.props.historicalData.timeline){
			const {country,timeline} = this.props.historicalData;
			this.makeChart(country,timeline)
		}
  }

  render() {
		
    return (
      <Paper 
				style={{maxWidth: 800 ,margin: 'auto',marginTop: '1rem'}}
				>
        <canvas
          ref={node => (this.node = node)}
        />
      </Paper>
    );
  
	}
}

export default LineChart;