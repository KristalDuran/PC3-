import React from 'react';

export class Futter extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render(){
    return (
      <div className="Futter">
        <p className="Futter-texto">Curso: Visualización de la Información</p>
        <p className="Futter-titulo">Visualización WEB</p>
        <p className="Futter-texto">Estudiante: Kristal Durán</p>
      </div>
    );
    }
}

export default Futter;
