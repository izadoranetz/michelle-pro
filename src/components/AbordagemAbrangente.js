import React from 'react';
import * as styles from './AbordagemAbrangente.module.scss';
import TituloNuvem from './TituloNuvem';
import rodaAbordagem from '../assets/images/abordagem-roda.png';
import passaroAmarelo from '../assets/images/passaro-amarelo.png';

function AbordagemAbrangente() {
  return (
    <section className={styles.sectionAbordagem}>
      <div className={`container ${styles.containerAbordagem}`}>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className={styles.abordagemContainerTitulo}>
              <TituloNuvem titulo="Abordagem Abrangente" cor="fundoBranco" />
              <img className={styles.passaroAmarelo} src={passaroAmarelo} alt=" " />
            </div>
            <div className={styles.abordagemContainerTexto}>
              <p className={styles.textoAbordagem}>
                Desenvolvido pelos PHd`s Sally Rogers e Geraldine Dawson,
                aborda todas as competências do desenvolvimento na infância,
                para que as crianças superem os atrasos e alcancem os melhores
                resultados ao longo da vida.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <img
              className={styles.rodaAbordagem}
              src={rodaAbordagem}
              alt="Ilustração de uma roda dividida em 8 parte e cada parte possui uma competência escrita: Interação Social, Atenção Conjunta, Compoetência Motora, Comportamento, Linguagem, Imitação, Autocuidado, Brincadeiras"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AbordagemAbrangente;
