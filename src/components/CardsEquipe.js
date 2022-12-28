import React, { useState } from 'react';
import * as styles from './CardsEquipe.module.scss';
import dois from '../assets/images/numero-dois.png';
import um from '../assets/images/numero-um.png';
import tres from '../assets/images/numero-tres.png';
import CardColorido from './CardColorido';

function CardsEquipe() {
  return (
    <section className={styles.sectionCardsEquipe}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 order-sm-1 order-lg-2`}>
            <CardColorido
              icone={um}
              titulo="Supervisor geral"
              cor="vermelho"
              alt="2"
              texto="Terapeuta ESDM formado pelo Mind Institute. Irá realizar as avaliações, desenvolver os objetivos a serem trabalhados e monitorar os supervisores dos casos e os assistentes terapêuticos. É de responsabilidade a observação dos dados de progresso e as decisões de alterações a serem feitas."
            />
          </div>
          <div className="col-lg-4 order-sm-2 order-lg-1">
            <CardColorido
              icone={dois}
              titulo="Supervisor do caso"
              cor="amarelo"
              alt="2"
              texto="Terapeuta com formação avançada no modelo pelo mind institute acompanhará a avaliação junto com o supervisor geral, transmitirá competências aos assistentes terapêuticos semanais, acompanhará os vídeos dos atendimentos para analisar a fidelidade de implementação. Fará a orientação e as modificações necessárias na implementação da intervenção.
"
            />
          </div>
          <div className="col-lg-4 order-sm-3 order-lg-3">
            <CardColorido
              icone={tres}
              titulo="Assistente terapêutico"
              cor="azul"
              alt="2"
              texto="Estudante das áreas de psicologia ou fonoaudiologia.
              Realizará o atendimento diário com a criança que aplica o plano conforme modelo indicado e monitorado pelos supervisores. É treinado por um terapeuta ESDM de forma individualizada e personalizada para alcançar a fidelidade na aplicação.
              Também recebe supervisão contínua semanalmente e suporte do supervisor do caso durante todo o tratamento."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsEquipe;
