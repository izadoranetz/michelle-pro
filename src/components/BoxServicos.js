import React from 'react';
import * as styles from './BoxServicos.module.scss';
import estrelasBottom from '../assets/images/estrelas-bottom.png';

function BoxServicos() {
  return (
    <section className={`container ${styles.sectionBox}`}>
      <div className={`row flex-column align-content-center ${styles.containerBoxServicos}`}>
        <div className={`col-lg-6 col-lg-sm-6 ${styles.contentBoxServicos}`}>
          <h3>
            Acompanhamos crianças e famílias de todo o Brasil, com serviços
            presenciais e à distância.
          </h3>
          <p>
            Oferecemos programas de intervenção precoce e intensiva,
            fundamentado no modelo denver (ESDM) e orientamos as famílias para
            que ajudem seus filhos a alcançarem os melhores resultados ao longo
            da vida.
          </p>
        </div>
      </div>
      <img src={estrelasBottom} className={styles.estrelasBottom} alt=" " />
    </section>
  );
}

export default BoxServicos;
