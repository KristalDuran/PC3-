import React from 'react';
import './App.css';
import Mapa from './mapa';
import MapaPais from './pais';
import data from './tooltip-datasource.json'
import bajar from './imgs/flecha.gif';
import { Button } from '@material-ui/core';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import world from './world-map.json';
import Data from './data';

export class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ver: false,
      pais: null,
      paisInfo: {}  
    };
    this.mapRef = React.createRef();
  }

  convert(){
    var m = data;
    m.forEach(function(p){
          p.value1= `${p.value1}`;
    });
  }

  onClick(info){
    let listCountries = world.features;
    listCountries.forEach(country => {
      if (country.properties.name === info.data.name) {
        
        this.setState({paisInfo: {
          "type": "FeatureCollection",
          "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
          "features": [
              country,
          ]}});
      }
    });
    this.setState({ pais:info.data.name})
    // console.log(this.state.pais);
  }

  onClick2(){
    this.setState({ pais:null})
  }

  render(){
    this.convert();
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-back">
            <p className="App-header-title">Felicidad Mundial</p>
            <img className="App-header-bajar" src={bajar}></img>
          </div>
        </header>
        
          {this.state.pais ? (
            <div className='App-infoPais'>
              <p className="App-info">¿Cuán feliz ha sido {this.state.pais} en los últimos años?</p>
              <MapaPais className='App-pais' paisInfo={this.state.paisInfo} onClick={this.onClick2.bind(this)}></MapaPais>
              <div className='App-data'></div>
              <Data className='App-data' countryName={this.state.pais}></Data>
              <Button
                className='App-button'
                variant="contained"
                color="default"
                // className={classes.button}
                endIcon={<ImportContactsIcon ver={this.state.ver} pais={this.state.pais}></ImportContactsIcon>}
              >
                Volver al mapa
              </Button>
            </div>
          ):(
            <div className="App-mapa">
          <p className="App-info">Datos de felicidad en el mundo del año anterior</p>
            <Mapa className='App-map' onClick={this.onClick.bind(this)}></Mapa>
            <Button
          className='App-button'
            variant="contained"
            color="default"
            // className={classes.button}
            endIcon={<ImportContactsIcon ver={this.state.ver} pais={this.state.pais}></ImportContactsIcon>}
          >
            Ver Storytelling
          </Button>
          {this.state.pais &&
          <div className='App-Storytelling'></div>
        }
        </div>
        
          )}
          
      </div>
    );
    }
}

export default App;
