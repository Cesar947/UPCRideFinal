import React from 'react';
import './SelectRol.css';
import Button from '@material-ui/core/Button';



class SelectRol extends React.Component {

  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + 'images/card.jpg'} className="Fondo" alt="logo" />
        <div className='Container'>
          <div className='Box'>
            <div className='ImgBox'>
              <img src={process.env.PUBLIC_URL + 'images/conductor.jpg'} className='Img' />
            </div>
            <div className='Details'>
              <Button className='Content' href="http://localhost:3000/driver/register">
                <h2>Conductor</h2>
                <p>Obten dinero ofreciendo servicio de colectivo a alumnos</p>
              </Button>
            </div>
          </div>
          <div className='Box'  >
            <div className='ImgBox'>
              <img src={process.env.PUBLIC_URL + 'images/pasajero.jpg'} className='Img' />
            </div>
            <div className='Details'>
              <Button className='Content' href="http://localhost:3000/passenger/register">
                <h2>Pasajero</h2>
                <p>Solicita servicios de colectivo y expande tu circulo social universitario</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectRol;