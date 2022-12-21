import * as React from 'react';
import * as styles from './BoxOqueEModeloDenver.module.scss';
import TituloNuvem from './TituloNuvem';

function BoxOqueEModeloDenver() {
  return (
    <section className={`container ${styles.sectionModeloDenver}`}>
      <div className={`row ${styles.containerModeloDenver}`}>
        <TituloNuvem titulo="O que é o Modelo Denver?" cor="fundoAzul" />
        <div className={styles.boxDescricao}>
          <p>
            O Modelo Denver é um programa que combina as melhores práticas da
            Análise do Comportamento Aplicada (ABA) com uma abordagem baseada na
            rotina, no jogo e no relacionamento, que torna a terapia divertida e
            eficaz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BoxOqueEModeloDenver;
