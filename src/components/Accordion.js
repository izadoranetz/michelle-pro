import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Accordion.module.scss';

function Accordion({ titulo, texto }) {
  return (
    <section className={styles.secaoAccordion}>
      <div className="row flex-column align-content-center">
        <div className={`${styles.boxAccordion}`}>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2
                class={`accordion-header`}
                id="headingOne"
              >
                <button
                  class={`accordion-button ${styles.tituloAccordion}`}
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
                class={`accordion-collapse collapse show`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class={`accordion-body ${styles.textoAccordion}`}>{texto}</div>
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
