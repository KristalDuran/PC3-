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
import Futter from './Futter/index';
import Storytelling from './Storytelling/index';

export class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ver: false,
      pais: null,
      paisInfo: {},
      storytelling: false
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

  onClickStorytelling(){
    this.setState({storytelling:!this.state.storytelling})
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
              <div className='App-data'>
                <div className='App-header-bajar'></div>
                <Data countryName={this.state.pais}></Data>
              </div>
              <Button
                className='App-button'
                variant="contained"
                color="default"
                // className={classes.button}
                onClick={this.onClick2.bind(this)}
                endIcon={<ImportContactsIcon ver={this.state.ver} pais={this.state.pais}></ImportContactsIcon>}
              >
                Volver al mapa
              </Button>
            </div>
          ):(
            !this.state.storytelling ? (
              <div className="App-mapa">
                <p className="App-info">Datos de felicidad en el mundo del año anterior</p>
                <Mapa className='App-map' onClick={this.onClick.bind(this)}></Mapa>
                <Button
                  className='App-button'
                  variant="contained"
                  color="default"
                  onClick={this.onClickStorytelling.bind(this)}
                  endIcon={<ImportContactsIcon ver={this.state.ver} pais={this.state.pais}></ImportContactsIcon>}
                >
                  Ver Storytelling
                </Button>
              </div>
            ):(
              <Storytelling onClickStorytelling={this.onClickStorytelling.bind(this)}></Storytelling>
            )
          )}
          <Futter></Futter>
      </div>
    );
    }
}

export default App;
