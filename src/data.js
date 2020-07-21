/* App.js */
import React from 'react';
import CanvasJSReact from './canvasjs.react';
import info2015 from './Data/2015.json';
import info2016 from './Data/2016.json';
import info2017 from './Data/2017.json';
import info2018 from './Data/2018.json';
import info2019 from './Data/2019.json';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Data extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state={
            i2015: {},
            i2016: {},
            i2017: {},
            i2018: {},
            i2019: {}
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.getData(this.props.countryName);
    }

    getData(country){
        info2015.forEach(info => {
            if (info.Country === country) {
                this.setState({i2015:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2016.forEach(info => {
            if (info.Country === country) {
                this.setState({i2016:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2017.forEach(info => {
            if (info.Country === country) {
                this.setState({i2017:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2018.forEach(info => {
            if (info.Country === country) {
                this.setState({i2018:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
        info2019.forEach(info => {
            if (info.Country === country) {
                this.setState({i2019:{happiness: info['Happiness Score'], heald: info.Health}})
            }
        });
    }

	render() {
        
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Promedio de felicidad durante los últimos 5 años"
			},
			axisX:{
				valueFormatString: "YYYY",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "Valor",
				includeZero: false,
				valueFormatString: "#0.000",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return CanvasJS.formatNumber(e.value, "#0.000");
					}
				}
			},
			data: [{
				type: "line",
				xValueFormatString: "YYYY",
				yValueFormatString: "#0.000",
				dataPoints: [
                  { x: new Date("2015"), y: Number(this.state.i2015.happiness)},
                  { x: new Date("2016"), y: Number(this.state.i2016.happiness)},
                  { x: new Date("2017"), y: Number(this.state.i2017.happiness)},
                  { x: new Date("2018"), y: Number(this.state.i2018.happiness)},
                  { x: new Date("2019"), y: Number(this.state.i2019.happiness)}
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default Data;   