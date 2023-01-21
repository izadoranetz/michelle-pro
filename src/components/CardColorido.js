import React, { useState } from 'react';
import * as styles from './CardColorido.module.scss';

function CardColorido({ icone, titulo, cor, alt, texto, texto2 }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      className={`${styles.card} ${styles[cor]}`}
      // onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <div className={styles.cardBack}>
          <div className={styles.headerCardBack}>
            <img className={styles.iconesMenor} src={icone} alt={alt} />
          </div>
          {currentPage === 1 ? (
            <div className={styles.texto}>
              <p>{texto}</p>
            </div>
          ) : (
            <div className={styles.texto}>
              <p>{texto2}</p>
            </div>
          )}
          {texto2 && (
            <footer>
              <ul className={styles.pagination}>
                <li className={styles.pageItem}>
                  <button
                    className={styles.pageLink}
                    onClick={(event) => {
                      setCurrentPage(1);
                      event.stopPropagation();
                    }}
                    disabled={currentPage === 1}
                  ></button>
                </li>
                <li className={styles.pageItem}>
                  <button
                    className={styles.pageLink}
                    onClick={(event) => {
                      setCurrentPage(2);
                      event.stopPropagation();
                    }}
                    disabled={currentPage === 2}
                  ></button>
                </li>
              </ul>
            </footer>
          )}
        </div>
      ) : (
        <>
          <div className={styles.cardFront}>
            <div className={styles.iconesContainer}>
              <img className={styles.icones} src={icone} alt={alt} />
            </div>
            <div className={`${styles.tituloCard}`}>{titulo}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default CardColorido;
