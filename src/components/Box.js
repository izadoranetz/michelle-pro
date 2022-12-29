import React from 'react';
import * as styles from './Box.module.scss';
import arcoIris from '../assets/images/arco-iris2.png';
import bolinhasVermelhas from '../assets/images/bolinhas-vermelhas.png';

function Box() {
  return (
    <section className={`container ${styles.sectionBox}`}>
      <div className={`row ${styles.containerSaiberMais}`}>
        <img src={arcoIris} className={styles.arcoIris} />
        <div className={`col-lg-6 ${styles.contentSaberMais}`}>
          <p>
            Fornecemos serviços de intervenção precoce de forma individualizada
            para crianças com atraso no desenvolvimento, autismo e sinais de
            alerta, para que cada criança se desenvolva em seu pleno potencial
          </p>
        </div>
        <a href="/servicos" className={styles.btnSaberMais}>
          Saber Mais+
        </a>
      </div>
      <img src={bolinhasVermelhas} className={styles.bolinhasVermelhas} />
    </section>
  );
}

export default Box;
