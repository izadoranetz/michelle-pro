import * as React from 'react';
import * as styles from './BoxOqueEModeloDenver.module.scss';
import TituloNuvem from './TituloNuvem';
import tresEstrelas from '../assets/images/tres-estrelas.png';
import flor from '../assets/images/flor.png';

function BoxOqueEModeloDenver() {
  return (
    <section className={`container ${styles.sectionModeloDenver}`}>
      <div className={`container ${styles.containerModeloDenver}`}>
        <TituloNuvem titulo="O que é o Modelo Denver?" cor="fundoAzul" />
        <img className={styles.flor} src={flor} alt=" " />
        <div className={`row justify-content`}>
          <div className={styles.boxDescricao}>
            <p>
              O Modelo Denver é um programa que combina as melhores práticas da
              Análise do Comportamento Aplicada (ABA) com uma abordagem baseada
              na rotina, no jogo e no relacionamento, que torna a terapia
              divertida e eficaz.
            </p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.Detalhes}`}>
        <img className={styles.tresEstrelas} src={tresEstrelas} alt=" " />
        <div className="row justify-content-between flex-wrap">
          <div
            className={`col-lg-5 col-md-12 ${styles.boxDetalhes} ${styles.boxAzul}`}
          >
            <p className={styles.boxTexto}>
              O modelo se destaca por ajudar as crianças com autismo se tornem
              participantes mais ativos no mundo. Iniciando e aceitando
              interações com outras pessoas, pois as interações sociais estão
              diretamente relacionadas as oportunidades de aprendizagem.
            </p>
          </div>
          <div
            className={`col-lg-5 col-md-12 ${styles.boxDetalhes} ${styles.boxVermelho}`}
          >
            <p className={styles.boxTexto}>
              Nosso foco é trazer a criança para uma relação social, interativa
              e coordenada durante a maior parte do tempo do seu dia, pois a
              aprendizagem se dá nas trocas sociais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxOqueEModeloDenver;
