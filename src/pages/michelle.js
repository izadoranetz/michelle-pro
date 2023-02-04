import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import fotoHero from '../assets/images/michelle-hero.png';
import HeroSection from '../components/HeroSection';
import fotoPerfil from '../assets/images/foto-perfil-michelle.png';
import * as styles from './michelle.module.scss';
import nuvemVermelha from '../assets/images/container-michelle.png';
import flor from '../assets/images/flor.png';
import estrelas from '../assets/images/estrelas-bottom.png';
import { notMemoizedtraceSVG } from 'gatsby-plugin-sharp/trace-svg';



const Michelle = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Michelle"
      segParteTitulo="Procópio"
      subtitulo="Conheça a idealizadora do
      projeto que conta com mais de
      70 profissionais especializados"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <div className={`container ${styles.secaoPerfil} my-4`}>
      <div className="row align-items-center">
        <div className="col-lg-7 col-sm-12 order-sm-2">
          <div className={styles.containerPerfil}>
            <img src={nuvemVermelha} alt=" " />
            <div className={styles.conteudoPerfil}>
              <p>
                Palestrante sobre intervenção precoce e autismo, professora de
                diversos cursos de pós graduação em diferentes estados do
                Brasil.
              </p>

              <p>
                Também é professora de graduação em disciplinas sobre linguagem,
                comunicação, autismo e inclusão.{' '}
              </p>

              <p>
                Em 2016 trouxe e organizou os primeiro workshop do modelo denver
                de intervenção precoce no brasil, difundindo sua eficácia.
              </p>

              <p>
                Em 2021 fez a formação básica e avançada no modelo Jasper e
                organizou o primeiro workshop introdutório do modelo com
                tradução para o português.
              </p>

              <p>
                Um de seus objetivos é compartilhar conhecimento e divulgar
                práticas baseadas em evidência para poder ajudar profissionais a
                levar intervenção de qualidade para as crianças e suas famílias.
              </p>
            </div>
            {/* <img src={nuvemVermelha} alt=" " className={styles.nuvemVermelha} /> */}
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 order-sm-1">
          <div className="container">
            <div className="row align-items-center">
              <img src={fotoPerfil} alt="Foto de Michelle Procópio" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`container ${styles.secaoQuote}`}>
      <div className={`row ${styles.containerQuote}`}>
        <div className={`col-lg-6 ${styles.contentQuote}`}>
          <p>
            Seu objetivo é compartilhar conhecimento e divulgar práticas
            baseadas em evidência para poder ajudar profissionais a levar
            intervenção de qualidade para as crianças e suas famílias.
          </p>
        </div>
      </div>
    </div>
    <div className={`container my-5 ${styles.secaoCurriculo}`}>
      <img src={estrelas} alt=" " className={styles.estrelas} />
      <div className={styles.containerCurriculo}>
        <div className={styles.titulo}>Supervisora geral</div>
        <div className={styles.texto}>
          <ul>
            <li>Coaching Parental (ESDM e Hanen)</li>
            <li>Mestre e doutoranda em ciências da saúde pela UNB</li>
            <li>Especialização em linguagem e motricidade orofacial</li>
            <li>
              Apprentice Trainer ESDM certificada pelo UC Davis Mind Institute
              da University of California, Sacramento (EUA)
            </li>
            <li>Formação Avançada no modelo Jasper - Kasarilab, UCLA</li>
            <li>More Than Words - Hanen Centre</li>
            <li>Modelo SCERTS - The Scerts Model</li>
            <li>Certificação nível 1 prt (PIVOTAL RESPONSE TREATMENT)</li>
            <li>Prompt introdutório e Bridging - The Prompt Institute</li>
            <li>PECS nível 1</li>
            <li>ADOS e ADI-R</li>
          </ul>
        </div>
        <img src={flor} alt=" " className={styles.flor} />
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Michelle Procopio" />;

export default Michelle;
