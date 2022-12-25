import React from 'react';
import * as styles from './Card.module.scss';

function Card({ titulo, texto, cor }) {
  return (
    <div className={`${styles.cardContainer} ${styles[cor]}`}>
      <div className={styles.tituloCard}>{titulo}</div>
      <div className={styles.textoCard}>{texto}</div>
    </div>
  );
}



export default Card;
