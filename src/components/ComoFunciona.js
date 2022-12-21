import React from 'react';
import * as styles from './ComoFunciona.module.scss';
import imgItem1 from '../assets/images/como-funciona-1-avaliacao.png';
import imgItem2 from '../assets/images/como-funciona-2-plano-terapia.png';
import imgItem3 from '../assets/images/como-funciona-3-intervencao-precoce.png';
import imgItem4 from '../assets/images/como-funciona-4-resultados.png';
import TituloNuvem from './TituloNuvem';

function ComoFunciona() {
  return (
    <section className={styles.sectionComoFunciona}>
      <div className="container">
        <TituloNuvem titulo="Mas como funciona?" cor="fundoAzul" />
        <div className="container">
          <div className="row justify-content-evenly flex-wrap">
            <div
              className={`col-lg-4 col-md-12 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div
                className={`${styles.cardNumeracao} ${styles.fundoVermelho}`}
              >
                1
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.vermelho}`}
              >
                <span>Avaliação</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>
                <img
                  src={imgItem1}
                  alt="Foto criança brincando com carrinhos"
                />
              </div>
              <div className={styles.cardComoFuncionaTextos}>
                Utilizamos o Checklist do Método Denver (ESDM)
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-12 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div className={`${styles.cardNumeracao} ${styles.fundoAmarelo}`}>
                2
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.amarelo}`}
              >
                <span>Plano de Terapia</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>
                <img src={imgItem2} alt=" " />
              </div>
              <div className={styles.cardComoFuncionaTextos}>
                Desenvolvimento individualizado contendo objetivos de todos os
                domínios do desenvolvimento.
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-12 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div className={`${styles.cardNumeracao} ${styles.fundoAzul}`}>
                3
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.azul}`}
              >
                <span>Intervenção Precoce</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>
                <img src={imgItem3} alt=" " />
              </div>
              <div className={styles.cardComoFuncionaTextos}>
                Objetivos desenvolvidos para serem adquiridos num período médio
                de 12 semanas. A meta é definida e adaptada durante as semanas
                pela supervisora do caso.
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-12 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div
                className={`${styles.cardNumeracao} ${styles.fundoVermelho}`}
              >
                4
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.vermelho}`}
              >
                <span>Resultados</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>
                <img src={imgItem4} alt=" " />
              </div>
              <div className={styles.cardComoFuncionaTextos}>
                A cada 12 semandas será realizada uma nova avaliação para o
                próximo plano terapêutico. Novos objetivos serão estabelecidos
                ou os antigos serão revistos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
