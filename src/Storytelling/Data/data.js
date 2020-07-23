/* App.js */
import React from 'react';
import CanvasJSReact from './../../canvasjs.react';
import info2015 from './../../Data/2015.json';
import info2016 from './../../Data/2016.json';
import info2017 from './../../Data/2017.json';
import info2018 from './../../Data/2018.json';
import info2019 from './../../Data/2019.json';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DataStory extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state={
            i2015: 0,
            i2016: 0,
            i2017: 0,
            i2018: 0,
            i2019: 0
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        let data2015 = 0;
        let data2016 = 0;
        let data2017 = 0;
        let data2018 = 0;
        let data2019 = 0;
        info2015.forEach(info => {
            data2015 += info['Happiness Score'];
        });
        info2016.forEach(info => {
            data2016 += info['Happiness Score'];
        });
        info2017.forEach(info => {
            data2017 += info['Happiness Score'];
        });
        info2018.forEach(info => {
            data2018 += info['Happiness Score'];
        });
        info2019.forEach(info => {
            data2019 += info['Happiness Score'];
        });
        this.setState({i2015: data2015/info2015.length, i2016: data2016/info2016.length, i2017: data2017/info2017.length, i2018: data2018/info2018.length, i2019: data2019/info2019.length })
    }

	render() {
        
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Promedio de felicidad mundial durante los últimos 5 años",
				size: '10px'
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
				type: "waterfall",
				xValueFormatString: "YYYY",
				yValueFormatString: "#0.000",
				dataPoints: [
                  { x: new Date("2015"), y: Number(this.state.i2015)},
                  { x: new Date("2016"), y: Number(this.state.i2016)},
                  { x: new Date("2017"), y: Number(this.state.i2017)},
                  { x: new Date("2018"), y: Number(this.state.i2018)},
                  { x: new Date("2019"), y: Number(this.state.i2019)}
				]
			}]
		}
		
		return (
			<CanvasJSChart options = {options}/>
		);
	}
}
 
export default DataStory;   