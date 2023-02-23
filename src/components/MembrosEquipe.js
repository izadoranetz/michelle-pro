import React from "react";
import * as styles from "./MembrosEquipe.module.scss";

import imgAmanda from "../assets/images/equipe/amanda.jpeg";
import imgCamila from "../assets/images/equipe/camila_zacarias.jpg";
import imgGabriela from "../assets/images/equipe/gabriela_lima.jpeg";
import imgKamila from "../assets/images/equipe/kamila_guimaraes.jpeg";
import imgMilena from "../assets/images/equipe/milena_nascimento.jpg";
import ModalCurriculo from "./ModalCurriculo";

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
                  <div className={styles.fotoPessoa}>
                    <img className={styles.fotoPessoa} src={imgAmanda} />
                  </div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Amanda Santos
                  </span>
                  <ModalCurriculo
                    nomeProfissional={"Amanda Santos"}
                    id={`exampleModal-amandaSantos`}
                  >
                    <p>Psicóloga CRP 01/21009</p>
                    <ul>
                      <li>
                        Pós graduanda em Análise do Comportamento Aplicada ao
                        Autismo , Atrasos de desenvolvimento intelectual e de
                        linguagem.
                      </li>
                      <li>Pós graduada em neuropsicologia </li>
                      <li>
                        Formação introdutória no modelo de intervenção precoce
                        Denver{" "}
                      </li>
                      <li>Formação introdutória no JASPER </li>
                      <li>
                        Curso Balance: Uma abordagem profissional-parental para
                        comportamento problema emergente.
                      </li>
                      <li>Vineland 3</li>
                    </ul>
                  </ModalCurriculo>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}>
                    <img className={styles.fotoPessoa} src={imgCamila} />
                  </div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Kamila Guimarães
                  </span>
                  <ModalCurriculo
                    nomeProfissional={"Kamila Guimarães"}
                    id={`exampleModal-kamilaGuimaraes`}
                  >
                    <p>Fonoaudióloga infantil</p>
                    <ul>
                      <li>
                        Especialização em Intervenções Precoces no Autismo
                      </li>
                      <li>
                        Formação Avançada ESDM certificada pelo UC Davis Mind
                        Institute da University of California, Sacramento (EUA)
                      </li>
                      <li>
                        Formação em Análise do Comportamento Aplicada (ABA) ao
                        Transtorno do Espectro Autista
                      </li>
                      <li>
                        Certificação nível 1 PRT (PIVOTAL RESPONSE TREATMENT)
                      </li>
                      <li>Certificação PECS nível 1</li>
                      <li>Certificação PODD </li>
                      <li>Certificação Core Words</li>
                      <li>
                        Cerca de 5 anos de experiência prática com intervenção
                        precoce naturalista
                      </li>
                    </ul>
                  </ModalCurriculo>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}>
                    <img className={styles.fotoPessoa} src={imgGabriela} />
                  </div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Gabriella Lima
                  </span>
                  <ModalCurriculo
                    nomeProfissional={"Gabriella Lima"}
                    id={`exampleModal-gabrielaLima`}
                  >
                    <p>Psicóloga CRP 01/23130</p>
                    <ul>
                      <li>
                        {" "}
                        Formação Avançada no Modelo Denver, certificada pelo UC
                        Davis Mind Institute da University of California,
                        Sacramento (EUA)
                      </li>
                      <li>
                        {" "}
                        Pós-graduanda em Psicologia da Saúde e Hospitalar
                      </li>
                      <li>
                        {" "}
                        minicurso “terapia analítico-comportamental infantil: a
                        atuação do terapeuta diante de dificuldades
                        comportamentais da criança - IBAC{" "}
                      </li>
                      <li> curso autismo em Foco</li>
                      <li>
                        {" "}
                        cursando aprimoramento profissional intervenção precoce
                        no autismo{" "}
                      </li>
                    </ul>
                  </ModalCurriculo>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}>
                    <img className={styles.fotoPessoa} src={imgKamila} />
                  </div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Camila Zacarias
                  </span>
                  <ModalCurriculo
                    nomeProfissional={"Camila Zacarias"}
                    id={`exampleModal-camilaZacarias`}
                  >
                    <p>Psicóloga CRP 01/21290</p>
                    <ul>
                      <li>
                        Formação Avançada no Modelo Denver, certificada pelo UC
                        Davis Mind Institute da University of California,
                        Sacramento (EUA)
                      </li>
                      <li>
                        Pós-graduanda em Neurociências, Educação e
                        Desenvolvimento Infantil
                      </li>
                      <li>Certificação nível 1 e 2 do PEAK</li>
                      <li>Certificação Inspirados pelo Autismo</li>
                      <li>Certificação nível 1 do PECS </li>
                      <li>
                        Certificação Básica em Integração Sensorial - Clínica
                        Ludens
                      </li>
                      <li>
                        Certificação Introdutória do VBMAPP (Verbal behavior
                        Milestones Assessment and Placement Program)
                      </li>
                      <li>
                        Certificação em Seletividade Alimentar no TEA –
                        Instituto Inclusão Eficiente
                      </li>
                    </ul>
                  </ModalCurriculo>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-2">
              <div className={styles.containerPessoa}>
                <div
                  className={`${styles.identificacaoPessoa} ${styles.flexCenter}`}
                >
                  <div className={styles.fotoPessoa}>
                    <img className={styles.fotoPessoa} src={imgMilena} />
                  </div>
                  <span className={`${styles.nomePessoa}  ${styles.amarelo}`}>
                    Milena Nascimento
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
