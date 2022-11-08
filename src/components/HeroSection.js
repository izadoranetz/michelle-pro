import React from 'react';
import './herosection.scss';
import fotoCrianca from '../assets/images/foto-home.png';
import arcoIris from '../assets/images/arco-iris.svg';
import estrelinhas from '../assets/images/estrelinhas.svg';

function HeroSection() {
  return (
    <div id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6 col-sm-6">
            <div className="hero-content">
              <h1 className="titulo-principal col-lg-6 col-md-6">
                <span>É sobre </span>
                <span>cuidado</span>
              </h1>
              <p className="subtitulo col-lg-8">
                Conheça a clínica referência em intervenção precoce para
                crianças com autismo
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="hero-imagens">
                <div className="row">
                    <img className="img-crianca" src={fotoCrianca} alt="Uma criança usando máscara sobre os olhos" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
