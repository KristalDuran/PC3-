import React from 'react';
import { Button } from '@material-ui/core';

import DataStory from './Data/data';
import DataStory2 from './Data/data2';

export class Storytelling extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render(){
    return (
      <div className="Storytelling">
        <p className="Storytelling-title">Felicidad y Salud</p>
        <p className="Storytelling-info">Buscarse emociones y sensaciones placenteras tratando de potenciarlas disminuyendo el dolor y el estrés.
Procurar que se encuentre la satisfacción máxima en las actividades cotidianas ya que esta demostrado que cuando uno está concentrando, inmerso en sus actividades, éstas comienzan a realizarse cada vez con menos esfuerzo, y tantos las ideas como las acciones parecen fluir de manera muy natural.</p>
        <div className='Storytelling-row'>
        <DataStory className='Storytelling-data'></DataStory>
        <DataStory2></DataStory2>
        </div>
        <Button
          className='App-button'
          variant="contained"
          color="default"
          // className={classes.button}
          onClick={this.props.onClickStorytelling}
        >
          Volver al mapa
        </Button>
      </div>
    );
    }
}

export default Storytelling;
// grupo - reus(todo) - documento(preguntar) - (otras empresas) - 15 y 28 - pare oral ella - tabla control de cambio doc pasado - no evalea dinamica 3 dias antes