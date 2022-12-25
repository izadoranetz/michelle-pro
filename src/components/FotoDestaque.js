import React from 'react';
import * as styles from './FotoDestaque.module.scss';
import detalheTop from '../assets/images/divisor-amarelo-claro.svg';
import detalheBottom from '../assets/images/divisor-amarelo-claro2.svg';

function FotoDestaque({ urlImagem, alt }) {
  return (
    <section className={styles.containerFotoDestaque}>
      <img className={styles.detalheTop} src={detalheTop} alt=" " />
      <img className={styles.detalheBottom} src={detalheBottom} alt=" " />
      <img className={styles.foto} src={urlImagem} alt={alt} />
    </section>
  );
}

export default FotoDestaque;
