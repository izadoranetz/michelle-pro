import React from 'react';
import * as styles from './BoxPqMetodoDenver.module.scss';
import Card from './Card';
import florAmarela from '../assets/images/flor-amarela2.png';
import linhaAmarela from '../assets/images/linha-pontos-amarela.png'; 

function BoxPqMetodoDenver() {
  return (
    <section className={styles.sectionBox}>
      <Card
        titulo="Porque escolher o modelo denver?"
        texto="Com evidências científicas robustas que refletem diretamente na eficácia da prática clínica. É a única intervenção precoce para o autismo que incide sobre todos os domínios do desenvolvimento. Foi desenvolvido especificamente para crianças, tanto ao currículo como aos estilos de ensino interativo e lúdico. Utilizamos brincadeiras e atividades compartilhadas para desenvolver as habilidades socioemocionais, cognitivas e de linguagem de cada criança). Os procedimentos de ensino naturalistas permitem que o ESDM possa ocorrer em todos os ambientes naturais das crianças"
        cor="azul"
      />
      <img className={styles.florAmarela} src={florAmarela} alt=" " />
      <img className={styles.linhaAmarela} src={linhaAmarela} alt=" " />
    </section>
  );
}

export default BoxPqMetodoDenver;
