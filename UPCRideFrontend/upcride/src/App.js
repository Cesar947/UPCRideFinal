
import React from 'react';
import Inicio from './components/Inicio.js'
//import IniciarViaje from './components/IniciarViaje';
import './App.css';




function App(props) {
 
  return (
    <div className="App">
      <header className="App-header">
         <div>
          
          <Inicio storeInicio={props.store} />
           
         </div>
      </header>
    </div>
  );
}


export default App;

