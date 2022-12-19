import React from 'react';
import * as styles from './TituloNuvem.module.scss';

function TituloNuvem({titulo}) {
  return (
    <div className="container">
      <div className={styles.TituloContainer}>
        <span className={styles.Titulo}>{titulo}</span>
      </div>
    </div>
  );
}

export default TituloNuvem;
