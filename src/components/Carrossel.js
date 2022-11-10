import React from 'react';
import * as styles from './Carrossel.module.scss';
import formas from '../assets/images/forma-carrossel.svg';
import nuvem from '../assets/images/nuvem.png';
import CarrosselItem from './CarrosselItem';
import imgContainerFeatureAzul from '../assets/images/carrossel-item-azul.png';
import imgContainerFeatureAmarelo from '../assets/images/carrossel-item-amarelo.png';
import imgContainerFeatureVermelho from '../assets/images/carrossel-item-vermelho.png';

function Carrossel() {
  return (
    <div className="container">
      <div className={`${styles.carrosselTituloContainer}`}>
        <span className={styles.carrosselTitulo}>O que fazemos de melhor!</span>
      </div>

      <div className="container-fluid">
        <div className="row flex-lg-row justify-content-lg-between align-items-center flex-sm-column p-sm-0">
          <div className={`col-lg-4 col-sm-6`}>
            <CarrosselItem
              titulo="Avaliação diagnóstica"
              texto="É normal ter duvidas sobre o desenvolvimento do seu filho e nós podemos te ajudar. longa experiência."
              srcFundo={imgContainerFeatureAmarelo}
            />
          </div>

          <div className={`col-lg-4 col-md-6`}>
            <CarrosselItem
              titulo="Para profissionais"
              texto="Ajudamos profissionais, clínicas e organizações que trabalham com crianças e/ou pais/famílias a terem as habilidades em identificar, avaliar e intervir crianças com sinais de alerta ou diagnóstico do transtorno do espectro do autismo"
              srcFundo={imgContainerFeatureAzul}
            />
          </div>

          <div className={`col-lg-4 col-md-6`}>
            <CarrosselItem
              titulo="Intervenção"
              texto="Fazemos avaliação e diagnóstico com protocolos nacionais e internacionais, com profissionais com diferentes formações e longa experiência."
              srcFundo={imgContainerFeatureVermelho}
            />
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
                <div className={`col-lg-6 col-md-6`}>
                  <CarrosselItem
                    titulo="Avaliação diagnóstica"
                    texto="É normal ter duvidas sobre o desenvolvimento do seu filho e nós podemos te ajudar. longa experiência."
                    srcFundo={imgContainerFeatureAmarelo}
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className={`col-lg-6 col-md-6`}>
                  <CarrosselItem
                    titulo="Para profissionais"
                    texto="Ajudamos profissionais, clínicas e organizações que trabalham com crianças e/ou pais/famílias a terem as habilidades em identificar, avaliar e intervir crianças com sinais de alerta ou diagnóstico do transtorno do espectro do autismo"
                    srcFundo={imgContainerFeatureAzul}
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className={`col-lg-3 col-md-6`}>
                  <CarrosselItem
                    titulo="Intervenção"
                    texto="Fazemos avaliação e diagnóstico com protocolos nacionais e internacionais, com profissionais com diferentes formações e longa experiência."
                    srcFundo={imgContainerFeatureVermelho}
                  />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Carrossel;
