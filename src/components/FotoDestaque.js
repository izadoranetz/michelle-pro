import React from 'react';
import * as styles from './FotoDestaque.module.scss';

function FotoDestaque() {
  return (
    <section className={styles.containerFotoDestaque}>
      <div className={styles.fotoDino}>
        <div className={styles.detalheTop}></div>
        <div className={styles.detalheBottom}></div>
      </div>
    </section>
  );
}

export default FotoDestaque;
