import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let db = [
    {
      viajeID: 1,
      usuario: {
          codigo: "u201710947",
          nombres: "César Alejandro",
          apellidos: "Pizarro Llanos"
      },
      descripcion: "Iré desde el Metro de la Av. Venezuela hasta la UPC Monterrico. Los espero.",
      puntoPartida: "San Miguel",
      puntoDestino: "UPC Monterrico",
      horaPartida: "17:00",
      horaLlegada: "18:30",
      entrada_salida: "E",
      fecha: "2019-06-10",
      dia: "Lunes",
      limitePersonaes: 4
  },
  {
    viajeID: 2,
    usuario: {
        codigo: "u201710070",
        nombres: "Juanelv Alessandro",
        apellidos: "Salgado Sanchez"
    },
    descripcion: "Viaje desde la UPC Monterrico hasta el Callao.",
    puntoPartida: "UPC Monterrico",
    puntoDestino: "Callao",
    horaPartida: "19:00",
    horaLlegada: "20:50",
    entrada_salida: "S",
    fecha: "2019-06-10",
    dia: "Lunes",
    limitePersonaes: 4
  }
  ]


ReactDOM.render(<App store={db}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
