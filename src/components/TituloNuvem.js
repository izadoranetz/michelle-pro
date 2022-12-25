import React from 'react';
import * as styles from './TituloNuvem.module.scss';

function TituloNuvem({ cor, titulo}) {
  return (
    <div
      className="container"
    >
      <div className={`${styles.tituloContainer} ${styles[cor]}`}>
        <div className={styles.titulo}>{titulo}</div>
      </div>
    </div>
  );
}

export default TituloNuvem;
