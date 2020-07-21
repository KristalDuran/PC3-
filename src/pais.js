import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapAjax } from '@syncfusion/ej2-maps';
import {
    MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective,
    ProjectionType, MapsTooltip, Legend, ITooltipRenderEventArgs, Selection, Highlight
} from '@syncfusion/ej2-react-maps';
import { Browser } from '@syncfusion/ej2-base';
// import { SampleBase } from './sample-base';
import datasource from './tooltip-datasource.json';
// let datasource =      data;
import world from './world-map.json';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
    
export class MapaPais extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        mapInstance: '',
        pais:this.props.paisInfo
    };
  }
  
  onMapsLoad(args) {
    let maps = document.getElementById('maps');
    maps.setAttribute('title', '');
  };
  
  tooltipRender(args) {
    this.setState({ver:!this.state.ver, pais:'args'})
    if (!args.options['data']) {
        args.cancel = true;
    }
  }

  

  render(){
    return (
        // <div className='control-pane'>
        //     <div className='control-section row'>
                <div className='col-md-6'>
                    <MapsComponent id="maps" 
                    // tooltipRender={this.tooltipRender.bind(this)} 
                    loaded={this.onMapsLoad.bind(this)} load={this.load} 
                        zoomSettings={{
                            enable: false
                        }}
                        legendSettings={{
                            visible: true,
                            mode: 'Interactive',
                            position: 'Left',
                            orientation: 'Vertical',
                            height: '70%',
                            width: '10',
                            textStyle: {
                                color: '#757575'
                            }
                        }}
                        // shapeSelected={this.onClick.bind(this)}
                    >
                        <Inject services={[MapsTooltip,Selection, Highlight, Legend]} />
                        <LayersDirective>
                            <LayerDirective shapeData={this.state.pais}
                                shapePropertyPath='name'
                                shapeDataPath='name'
                                dataSource={datasource}
                                tooltipSettings={{
                                    visible: true,
                                    valuePath: 'name',
                                    template: '<div id="tooltemplate" style="width: 90px;background: rgba(53, 63, 76, 0.90); opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding-bottom: 10px;padding-top: 10px;padding-left: 10px;padding-right: 10px;border: 1px #abb9c6">'+
                                        '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${country}</center></div>'+
                                        '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">'+
                                        '<div><span style="font-size:13px;color:#cccccc">Felicidad : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${value1}</span></div>',
                                }}
                                // shapeSelected={this.onClick.bind(this)}
                                shapeSettings={{
                                    fill: 'lightgrey',
                                    colorMapping: [
                                        {
                                            value: '1',
                                            color: '#FCE55F'
                                        },
                                        {
                                            color: '#F9D923',
                                            value: '2'
                                        },
                                        {
                                            color: '#F9CC23',
                                            value: '3'
                                        },
                                        {
                                            color: '#F9BB23',
                                            value: '4'
                                        },
                                        {
                                            color: '#F9AB23',
                                            value: '5'
                                        },
                                        {
                                            color: '#F99823',
                                            value: '6'
                                        },
                                        {
                                            color: '#F96A23',
                                            value: '7'
                                        }
                                    ],
                                    colorValuePath: 'value1'
                                }}
                            >
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
        //     </div>
        // </div>
    );
    }
}

export default MapaPais;