import React from 'react';
import * as styles from './CtaConsulta.module.scss';
import blobEstrelas from '../assets/images/blob-estrelas.png';
import balao from '../assets/images/balao-frase.png';

function CtaConsulta() {
  return (
    <section className={styles.secaoCtaConsulta}>
      <div className={`container`}>
        <div className={`row justify-content-center`}>
        <div className={`col-lg-1`}></div>
          <div className={`col-lg-4 ${styles.blobEstrelas}`}>
            <img src={blobEstrelas} alt=" " />
          </div>
          <div className={`col-lg-3 align-self-center`}>
            <h4 className={styles.ctaTitulo}>o melhor</h4>
            <h4 className={styles.ctaTitulo}>começo</h4>
          </div>
          <div className={`col-lg-2 align-self-end`}>
            <img src={balao} alt="Para cada criança" />
          </div>
          <div className={`col-lg-2`}></div>
        </div>
        <div className={`row`}>
          <a href="https://wa.me/556184623608" target={"_blank"} className={styles.btnAgendar}>
            Agendar uma consulta
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaConsulta;
