import React from 'react';
import * as styles from './Carrossel.module.scss';
import formas from '../assets/images/forma-carrossel.svg';
import nuvem from '../assets/images/nuvem.png';

function Carrossel() {
  return (
    <div className="container">
      <div className={`${styles.carrosselTituloContainer}`}>
        {/* <img src={nuvem} className={styles.imgFluid} /> */}
        <span className={styles.carrosselTitulo}>O que fazemos de melhor!</span>
      </div>
      <div className="container-fluid">
        <div className="row flex-lg-row justify-content-lg-between align-items-center flex-sm-column">
          <div
            className={`col-lg-3 col-md-6 ${styles.fundoAmarelo} ${styles.containerFeatures}`}
          >
            <div className={styles.contentFeatures}>
              <header className={styles.headerFeatures}>
                Avaliação diagnóstica
              </header>
              <div className={styles.textFeatures}>
                É normal ter duvidas sobre o desenvolvimento do seu filho e nós
                podemos te ajudar. longa experiência.
              </div>
            </div>
          </div>

          <div
            className={`col-lg-6 col-md-6 ${styles.fundoAzul} ${styles.containerFeatures}`}
          >
            <div className={`w-100 ${styles.contentFeatures}`}>
              <header className={styles.headerFeatures}>
                Para profissionais
              </header>
              <div className={styles.textFeatures}>
                ajudamos profissionais, clínicas e organizações que trabalham
                com crianças e/ou pais/famílias a terem as habilidades em
                identificar, avaliar e intervir crianças com sinais de alerta ou
                diagnóstico do transtorno do espectro do autismo
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 ${styles.fundoVermelho} ${styles.containerFeatures}`}
          >
            <div className={styles.contentFeatures}>
              <header className={styles.headerFeatures}>Intervenção</header>
              <div className={styles.textFeatures}>
                Fazemos avaliação e diagnóstico com protocolos nacionais e
                internacionais, com profissionais com diferentes formações e
                longa experiência.
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="container-fluid">
        <div className="row flex-lg-row justify-content-center">

        <div
        id="carouselExampleControls"
        class={`carousel carousel-dark slide ${styles.carouselResize}`}
        data-bs-ride="carousel"
        data-pause="true"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div
            className={`${styles.fundoAmarelo} ${styles.containerFeatures}`}
          >
            <div className={styles.contentFeatures}>
              <header className={styles.headerFeatures}>
                Avaliação diagnóstica
              </header>
              <div className={styles.textFeatures}>
                É normal ter duvidas sobre o desenvolvimento do seu filho e nós
                podemos te ajudar. longa experiência.
              </div>
            </div>
          </div>
          </div>
          <div class="carousel-item">
            <div
              className={`col-lg-6 col-md-6 ${styles.fundoAzul} ${styles.containerFeatures}`}
            >
              <div className={`w-100 ${styles.contentFeatures}`}>
                <header className={styles.headerFeatures}>
                  Para profissionais
                </header>
                <div className={styles.textFeatures}>
                  ajudamos profissionais, clínicas e organizações que trabalham
                  com crianças e/ou pais/famílias a terem as habilidades em
                  identificar, avaliar e intervir crianças com sinais de alerta
                  ou diagnóstico do transtorno do espectro do autismo
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div
            className={`col-lg-3 col-md-6 ${styles.fundoVermelho} ${styles.containerFeatures}`}
          >
            <div className={styles.contentFeatures}>
              <header className={styles.headerFeatures}>Intervenção</header>
              <div className={styles.textFeatures}>
                Fazemos avaliação e diagnóstico com protocolos nacionais e
                internacionais, com profissionais com diferentes formações e
                longa experiência.
              </div>
            </div>
          </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        </div>
      </div> */}


      

    </div>
  );
}

export default Carrossel;
