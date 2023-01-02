import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import fotoHero from '../assets/images/michelle-hero.png';
import HeroSection from '../components/HeroSection';
import fotoPerfil from '../assets/images/foto-perfil-michelle.png';
import * as styles from './michelle.module.scss';
import nuvemVermelha from '../assets/images/container-michelle.png';

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
        <div className="col-lg-5">
          <img src={fotoPerfil} alt="Foto de Michelle Procópio" />
        </div>
        <div className="col-lg-7">
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
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Michelle Procopio" />;

export default Michelle;
