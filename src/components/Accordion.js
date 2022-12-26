import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Accordion.module.scss';

function Accordion({ itens, url }) {
  return (
    <section className={styles.secaoAccordion}>
      <div className={`row flex-column align-content-center`}>
        <div className={`accordion-flush ${styles.boxAccordion}`}>
          <div className={`accordion`} id={`accordionModel`}>
            {itens.map((item, index) => (
              <div className={`accordion-item`} key={index}>
                <h2
                  className={`accordion-header`}
                  id={`flush-heading-${index}`}
                >
                  <button
                    className={`accordion-button ${styles.tituloAccordion} ${styles[item.cor]}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse-${index}`}
                  >
                    {item.titulo}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className={`accordion-collapse collapse show`}
                  aria-labelledby={`flush-heading-${index}`}
                  data-bs-parent="#accordionModel"
                >
                  <div className={`accordion-body ${styles.textoAccordion}`}>{item.texto}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href={url} className={styles.btnSaberMais}>
          Saber +
        </a>
      </div>
    </section>
  );
}

Accordion.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.node.isRequired,
    texto: PropTypes.node.isRequired,
    cor: PropTypes.string, // adicione esta propriedade para armazenar a cor do título
  })).isRequired,
};
export default Accordion;
