import React from "react";
import * as styles from "./Carrossel.module.scss";
import CarrosselItem from "./CarrosselItem";
import imgContainerFeatureAzul from "../assets/images/carrossel-item-azul.png";
import imgContainerFeatureAmarelo from "../assets/images/carrossel-item-amarelo.png";
import imgContainerFeatureVermelho from "../assets/images/carrossel-item-vermelho.png";

function Carrossel() {
  return (
    <div className="container py-5">
      <div className="container-fluid">
        <div className={styles.itemsContainer}>
          <CarrosselItem
            cor={styles.amarelo}
            titulo="Avaliação diagnóstica"
            texto="É normal ter dúvidas sobre o desenvolvimento do seu filho e nós podemos te ajudar."
            srcFundo={imgContainerFeatureAmarelo}
          />

          <CarrosselItem
            cor={styles.azul}
            titulo="Para profissionais"
            texto="Ajudamos profissionais, clínicas e organizações que trabalham com crianças e/ou pais/famílias a terem as habilidades em identificar, avaliar e intervir crianças com sinais de alerta ou diagnóstico do transtorno do espectro do autismo"
            srcFundo={imgContainerFeatureAzul}
          />

          <CarrosselItem
            cor={styles.vermelho}
            titulo="Intervenção"
            texto="Fazemos avaliação e diagnóstico com protocolos nacionais e internacionais, com profissionais com diferentes formações e longa experiência."
            srcFundo={imgContainerFeatureVermelho}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrossel;
