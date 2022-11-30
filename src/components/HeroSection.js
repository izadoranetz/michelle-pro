import React from 'react';
import * as styles from './Herosection.module.scss';

function HeroSection({
  primParteTitulo,
  segParteTitulo,
  subtitulo,
  urlImagem,
  altImagem,
}) {
  return (
    <div id="home" className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-7 col-sm-6">
            <div className="container">
              <h1 className={`col-lg-6 col-md-12 col-sm-12 ${styles.tituloPrincipal}`}>
                <p>
                  <span>{primParteTitulo}</span>
                </p>
                <p>
                  <span>{segParteTitulo}</span>
                </p>
              </h1>
              <p className={`col-lg-8 col-md-12 col-sm-12 ${styles.subtitulo}`}>
                {subtitulo}
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className={styles.heroImagens}>
              <div className="row d-flex justify-content-center">
                <img
                  className={styles.imgCrianca}
                  src={urlImagem}
                  alt={altImagem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
