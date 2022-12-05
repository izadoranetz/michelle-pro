import React from 'react';
import * as styles from './ComoFunciona.module.scss';

function ComoFunciona() {
  return (
    <section className={styles.sectionComoFunciona}>
      <div className="container">
        <div className={styles.tituloComoFuncionaContainer}>
          <span className={styles.tituloComoFunciona}>Mas como funciona?</span>
        </div>
        <div className="container">
          <div className="row justify-content-evenly flex-wrap">
            <div
              className={`col-lg-3 col-md-6 cold-sm-12 ${styles.cardComoFunciona}`}
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
              <div className={styles.cardComoFuncionaImagem}>imagem</div>
              <div className={styles.cardComoFuncionaTextos}>
                Utilizamos o Checklist do Método Denver (ESDM)
              </div>
            </div>

            <div
              className={`col-lg-3 col-md-6 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div className={`${styles.cardNumeracao} ${styles.fundoAmarelo}`}>
                2
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.amarelo}`}
              >
                <span>Plano de Terapia</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>imagem</div>
              <div className={styles.cardComoFuncionaTextos}>
                Desenvolvimento individualizado contendo objetivos de todos os
                domínios do desenvolvimento.
              </div>
            </div>

            <div
              className={`col-lg-3 col-md-6 cold-sm-12 ${styles.cardComoFunciona}`}
            >
              <div className={`${styles.cardNumeracao} ${styles.fundoAzul}`}>
                3
              </div>
              <div
                className={`${styles.cardComoFuncionaTitulo} ${styles.azul}`}
              >
                <span>Intervenção Precoce</span>
              </div>
              <div className={styles.cardComoFuncionaImagem}>imagem</div>
              <div className={styles.cardComoFuncionaTextos}>
                Objetivos desenvolvidos para serem adquiridos num período médio
                de 12 semanas. A meta é definida e adaptada durante as semanas
                pela supervisora do caso.
              </div>
            </div>

            <div
              className={`col-lg-3 col-md-6 cold-sm-12 ${styles.cardComoFunciona}`}
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
              <div className={styles.cardComoFuncionaImagem}>imagem</div>
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
