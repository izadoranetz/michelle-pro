import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CarrosselItem.module.scss';

function CarrosselItem({ titulo, texto, srcFundo, cor }) {
  return (
    <div className={`${styles.containerFeatures}`}>
      <img src={srcFundo} alt="" />
      <div className={`${styles.contentFeatures} ${cor}`}>
        <header className={styles.headerFeatures}>{titulo}</header>
        <div className={styles.textFeatures}>{texto}</div>
      </div>
    </div>
  );
}

CarrosselItem.propTypes = {
  titulo: PropTypes.node.isRequired,
  texto: PropTypes.node.isRequired,
  srcFundo: PropTypes.node.isRequired,
};

export default CarrosselItem;
