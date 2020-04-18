import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from 'chart.js';

class LineChart extends React.Component {
	
	myChart = null;

	makeChart = (country,timeline) => {
		if(this.myChart !== null){
			this.myChart.destroy();
		}
  	const node = this.node;
		this.myChart = new Chart(node, {
      type: "line",
      data: {
        labels: Object.keys(timeline.cases),
        datasets: [
          {
            label: 'Cases',
            data: Object.values(timeline.cases),
						pointBackgroundColor: 'blue',
            backgroundColor: [
							'rgba(0,0,255,0.1)',
            ],
						borderColor: [
							'rgba(0,0,255,1)',
            ],
            borderWidth: 2
          },
          {
            label: 'Deaths',
            data: Object.values(timeline.deaths),
						pointBackgroundColor: 'red',
            backgroundColor: [
							'rgba(255,0,0,0.5)',
            ],
						borderColor: [
							'rgba(255,0,0,1)',
            ],
            borderWidth: 2
          },
          {
            label: 'Reacovered' ,
            data: Object.values(timeline.recovered),
						pointBackgroundColor: 'green',
            backgroundColor: [
							'rgba(0,255,0,0.3)',
            ],
						borderColor: [
							'rgba(0,255,0,1)',
            ],
            borderWidth: 2
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
						gridLines: {
							display: true,
							zeroLineColor: 'rgb(0,0,0)',
						},
						ticks: {
							beginAtZero: true,
							maxTicksLimit: 7,
						}
					}],
					xAxes: [{
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