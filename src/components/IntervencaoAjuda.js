import * as React from 'react';
import * as styles from './IntervencaoAjuda.module.scss';
import TituloNuvem from './TituloNuvem';
import pares from '../assets/images/pares.png';
import alimentacao from '../assets/images/alimentacao.png';
import desfralde from '../assets/images/desfralde.png';
import higiene from '../assets/images/higiene.png';
import motricidade from '../assets/images/motricidade.png';
import comunicacao from '../assets/images/comunicacao.png';
import escolar from '../assets/images/escolar.png';
import gestao from '../assets/images/gestao.png';
import CardColorido from './CardColorido';

function IntervencaoAjuda() {
  return (
    <section className={styles.intervencaoSection}>
      <div className={styles.titulo}>
        <TituloNuvem titulo="Intervenção Ajuda" cor="fundoBrancoMenor" />
      </div>
      <div className={styles.conteudo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={pares}
                titulo="Intervenção em pares"
                cor="vermelho"
                alt="Ícone Pares"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor tortor, rutrum a tortor ac, fermentum auctor libero. In congue porttitor maximus. Quisque elementum sed purus ac volutpat. Nam non diam non ligula ultrices fringilla."
                texto2="Nulla facilisi. Aenean aliquam tincidunt mauris. In pulvinar, arcu eget posuere accumsan, nisi leo finibus tellus, vitae faucibus elit diam aliquet est. "
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={alimentacao}
                titulo="Alimentação independente"
                cor="amarelo"
                alt="Ícone Alimentação"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={desfralde}
                titulo="Desfralde"
                cor="azul"
                alt="Ícone Desfralde"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={higiene}
                titulo="Higiêne autônoma"
                cor="vermelho"
                alt="Ícone Pares"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
                texto2="Nulla facilisi. Aenean aliquam tincidunt mauris. In pulvinar, arcu eget posuere accumsan, nisi leo finibus tellus, vitae faucibus elit diam aliquet est. "
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={motricidade}
                titulo="Motricidade"
                cor="azul"
                alt="Ícone Motricidade"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
                texto2="Nulla facilisi. Aenean aliquam tincidunt mauris. In pulvinar, arcu eget posuere accumsan, nisi leo finibus tellus, vitae faucibus elit diam aliquet est. "
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={comunicacao}
                titulo="Comunicação alternativa"
                cor="vermelho"
                alt="Ícone Comunicação"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={escolar}
                titulo="Inclusão escolar eficiente"
                cor="amarelo"
                alt="Ícone Escolar"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              />
            </div>
            <div className="col-lg-3 mb-4">
              <CardColorido
                icone={gestao}
                titulo="Gestão de comportamento"
                cor="azul"
                alt="Ícone Gestão"
                texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntervencaoAjuda;

{
  /* <CardColorido icone=" " titulo=" " cor=" " alt=" " /> */
}
