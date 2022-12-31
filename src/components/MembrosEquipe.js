import React from 'react';
import * as styles from './MembrosEquipe.module.scss';

function CardEquipe() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={`${styles.cardNumeracao} ${styles.fundoVermelho}`}>
          1
        </div>
        <div className={`${styles.cardTitulo} ${styles.vermelho}`}>
          <span>Supervisor geral</span>
        </div>

        <div className={` ${styles.containerPessoa}`}>
          <div className={styles.fotoPessoa}></div>
          <div className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}>
            <span className={`${styles.nomePessoa} ${styles.vermelho}`}>
              <a
                href="michelle"
                className={`${styles.nomePessoa} ${styles.vermelho}`}
              >
                Michelle Procópio
              </a>
            </span>
            <span className={styles.ocupacaoPessoa}>
              Fonoaudióloga e Psicóloga
            </span>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.cardNumeracao} ${styles.fundoAmarelo}`}>
          2
        </div>
        <div className={`${styles.cardTitulo} ${styles.amarelo}`}>
          <span>Supervisor de caso</span>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-evenly flex-wrap">
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Michelle Procópio
                  </span>
                  <span className={styles.ocupacaoPessoa}>
                    Fonoaudióloga e Psicóloga
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Michelle Procópio
                  </span>
                  <span className={styles.ocupacaoPessoa}>
                    Fonoaudióloga e Psicóloga
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Michelle Procópio
                  </span>
                  <span className={styles.ocupacaoPessoa}>
                    Fonoaudióloga e Psicóloga
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Michelle Procópio
                  </span>
                  <span className={styles.ocupacaoPessoa}>
                    Fonoaudióloga e Psicóloga
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Michelle Procópio
                  </span>
                  <span className={styles.ocupacaoPessoa}>
                    Fonoaudióloga e Psicóloga
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}></div>
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
    </section>
  );
}

export default CardEquipe;
