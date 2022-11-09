import React from 'react';
import * as styles from './Carrossel.module.scss';
import formas from '../assets/images/forma-carrossel.svg';
import nuvem from '../assets/images/nuvem.png'

function Carrossel() {
  return (
    <div className="container">
      <div className={`${styles.carrosselTituloContainer}`}>
        {/* <img src={nuvem} className={styles.imgFluid} /> */}
        <span className={styles.carrosselTitulo}>O que fazemos de melhor!</span>
      </div>
      
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={formas}
              class={`d-block w-100 ${styles.imagemCarrossel}`}
            />
          </div>
          <div class="carousel-item">
            <img
              src={formas}
              class={`d-block w-100 ${styles.imagemCarrossel}`}
            />
          </div>
          <div class="carousel-item">
            <img
              src={formas}
              class={`d-block w-100 ${styles.imagemCarrossel}`}
            />
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
      </div> */}
    </div>
  );
}

export default Carrossel;
