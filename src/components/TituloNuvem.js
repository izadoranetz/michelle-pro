import React from 'react';
import * as styles from './TituloNuvem.module.scss';

function TituloNuvem({ cor, titulo, subtitulo }) {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.tituloContainer} ${styles[cor]}`}>
        <div className={styles.conteudo}>
          <span className={styles.titulo}>{titulo}</span>
          {subtitulo && (
            <span className={styles.subtitulo}>
              {subtitulo}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TituloNuvem;
