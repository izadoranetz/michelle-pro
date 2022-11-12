import React from 'react';
import * as styles from './GrandesNumeros.module.scss';

function GrandesNumeros() {
  return (
    <section className={styles.containerNumeros}>
      <div className={styles.fotoCriancas}>
        <div className={styles.detalheTop}></div>
        <div className={styles.detalheVermelhoTop}></div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-3">
            <h3 className={styles.grandesNumeros}>+80</h3>
            <span className={styles.numerosLegenda}>Pacientes atendidos</span>
          </div>
          <div className="col-lg-3">
            <h3 className={styles.grandesNumeros}>+60</h3>
            <span className={styles.numerosLegenda}>Profissionais capacitados</span>
          </div>
          <div className="col-lg-3">
            <h3 className={styles.grandesNumeros}>+20</h3>
            <span className={styles.numerosLegenda}>Certificados internacionais</span>
          </div>
          <div className="col-lg-3">
            <h3 className={styles.grandesNumeros}>+500</h3>
            <span className={styles.numerosLegenda}>Coach parental realizados</span>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-12">
            <a href="/" className={styles.btnAgendar}>Agendar uma consulta</a>
          </div>
        </div>
      </div>
      <div className={styles.detalheVermelhoBottom}></div>
    </section>
  );
}

export default GrandesNumeros;
