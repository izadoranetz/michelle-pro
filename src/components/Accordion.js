import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Accordion.module.scss';

function Accordion({ titulo, texto }) {
  return (
    <section className={styles.secaoAccordion}>
      <div className={`row flex-column align-content-center`}>
        <div className={`accordion-flush ${styles.boxAccordion}`}>
          <div className={`accordion`} id={`accordionModel`}>
            <div className={`accordion-item`}>
              <h2
                className={`accordion-header`}
                id="flush-heading"
              >
                <button
                  className={`accordion-button ${styles.tituloAccordion}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {titulo}
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse show`}
                aria-labelledby="flush-heading"
                data-bs-parent="#accordionModel"
              >
                <div className={`accordion-body ${styles.textoAccordion}`}>{texto}</div>
              </div>
            </div>
          </div>
        </div>{' '}
        <a href="#" className={styles.btnSaberMais}>
          Saber +
        </a>
      </div>
    </section>
  );
}

Accordion.propTypes = {
  titulo: PropTypes.node.isRequired,
  texto: PropTypes.node.isRequired,
};

export default Accordion;
