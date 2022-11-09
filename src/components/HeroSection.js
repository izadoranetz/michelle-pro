import React from 'react';
import * as styles from './Herosection.module.scss';
import fotoCrianca from '../assets/images/foto-home.png';

function HeroSection() {
  return (
    <div id="home" className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6 col-sm-6">
            <div className="container">
              <h1 className={`col-lg-6 col-md-6 ${styles.tituloPrincipal}`}>
                <span>É sobre </span>
                <span>cuidado</span>
              </h1>
              <p className={`col-lg-8 col-md-10 col-sm-6 ${styles.subtitulo}`}>
                Conheça a clínica referência em intervenção precoce para
                crianças com autismo
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className={styles.heroImagens}>
                <div className="row d-flex justify-content-center">
                    <img className={styles.imgCrianca} src={fotoCrianca} alt="Uma criança usando máscara sobre os olhos" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
