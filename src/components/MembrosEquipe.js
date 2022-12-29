import React from 'react';
import * as styles from './MembrosEquipe.module.scss';

function CardEquipe(img, alt) {
  return (
    <section className="container">
      <div className="row justify-content-evenly flex-wrap">
        <div className={`col-lg-10 ${styles.card}`}>
          <div className={`${styles.cardNumeracao} ${styles.fundoVermelho}`}>
            1
          </div>
          <div className={`${styles.cardTitulo} ${styles.vermelho}`}>
            <span>Supervisor geral</span>
          </div>
          <div className={styles.containerPessoa}>
            <div className={styles.fotoPessoa}>
              {/* <img src={img} alt={alt} /> */}
            </div>
            <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
              <span className={`${styles.nomePessoa} ${styles.vermelho}`}>
                Michelle Procópio
              </span>
              <span className={styles.ocupacaoPessoa}>
                Fonoaudióloga e Psicóloga
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly flex-wrap">
        <div className={`col-lg-10 ${styles.card}`}>
          <div className={`${styles.cardNumeracao} ${styles.fundoAmarelo}`}>
            2
          </div>
          <div className={`${styles.cardTitulo} ${styles.amarelo}`}>
            <span>Supervisor de caso</span>
          </div>

          <div className="container-fluid">
            <div className="row justify-content-evenly flex-wrap">
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className={styles.containerPessoa}>
                  <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
                    <div className={styles.fotoPessoa}>
                      {/* <img src={img} alt={alt} /> */}
                    </div>
                    <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                      Michelle Procópio
                    </span>
                    <span className={styles.ocupacaoPessoa}>
                      Fonoaudióloga e Psicóloga
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardEquipe;
