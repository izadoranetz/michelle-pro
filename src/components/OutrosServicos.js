import React from 'react';
import * as styles from './OutrosServicos.module.scss';
import pares from '../assets/images/icon-pares.png';
import alimentacao from '../assets/images/icon-alimentacao.png';
import desfralde from '../assets/images/icon-desfralde.png';
import higiene from '../assets/images/icon-higiene.png';
import motricidade from '../assets/images/icon-motricidade.png';
import comunicacao from '../assets/images/icon-comunicacao.png';
import escolar from '../assets/images/icon-escolar.png';
import gestao from '../assets/images/icon-gestao.png';
import bolinhasAzuis from '../assets/images/bolinhas-azuis.svg';


function OutrosServicos() {
  return (
    <section className={`container ${styles.containerServicos}`}>
      <div className={`${styles.tituloContainer}`}>
        <h3 className={styles.titulo}>Outros Serviços</h3>
      </div>
     
      <div className={`container ${styles.gridServicos}`}>
        <div className="row">
          <div className="col-lg-3 col-md-6  col-sm-6 ">
            <img className={styles.icones} src={pares} alt="Ícone Pares" />
            <p className={styles.iconSubtitulos}>Intervenção com pares</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              className={styles.icones}
              src={alimentacao}
              alt="Ícone Alimentação"
            />
            <p className={styles.iconSubtitulos}>Alimentação independente</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              className={styles.icones}
              src={desfralde}
              alt="Ícone Desfralde"
            />
            <p className={styles.iconSubtitulos}>Desfralde</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img className={styles.icones} src={higiene} alt="Ícone Higiene" />
            <p className={styles.iconSubtitulos}>Higiene Autônoma</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              className={styles.icones}
              src={motricidade}
              alt="Ícone Motricidade"
            />
            <p className={styles.iconSubtitulos}>Motricidade</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              className={styles.icones}
              src={comunicacao}
              alt="Ícone Comunicação"
            />
            <p className={styles.iconSubtitulos}>
              Comunicação alternativa e aumentativa
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              className={styles.icones}
              src={escolar}
              alt="Ícone Inclusão Escolar"
            />
            <p className={styles.iconSubtitulos}>Inclusão escolar eficiente</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img className={styles.icones} src={gestao} alt="Icone Gestão" />
            <p className={styles.iconSubtitulos}>
              Gestão de comportamento inadequado
            </p>
          </div>
        </div>
      </div>
      <img src={bolinhasAzuis} className={styles.bolinhasAzuis} alt=" " />
    </section>
  );
}

export default OutrosServicos;
