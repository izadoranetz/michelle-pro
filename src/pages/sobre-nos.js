import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from './sobreNos.module.scss';
import TituloNuvem from '../components/TituloNuvem';
import Card from '../components/Card';
import fotoHero from '../assets/images/sobre-nos-hero.png';
import fotoConhecaEquipe from '../assets/images/imagem-conheca-equipe.png';
import florVermelha from '../assets/images/flor-vermelha.png';

const IndexPage = () => (
  <Layout>
    <section className={styles.mainSection}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6 col-sm-12">
            <div className="container">
              <h1
                className={`col-lg-6 col-md-12 col-sm-12 ${styles.tituloPrincipal}`}
              >
                <span>Diretora</span>
              </h1>
              <TituloNuvem
                titulo="Michelle Procópio"
                subtitulo="Fonoaudióloga e Psicóloga"
                cor="fundoAzul"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className={styles.heroImagens}>
              <div className="row d-flex justify-content-center">
                <img
                  className={styles.imgHero}
                  src={fotoHero}
                  alt="Diretora Michelle Procópio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.containerConhecaEquipe}`}>
        <div className="row">
          <div className="col-lg-5 order-sm-1 order-lg-2">
            <div className={`container ${styles.contentConhecaEquipe}`}>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  Sabemos da importância da intervenção precoce para o
                  prognóstico futuro das nossas crianças, por isso temos uma
                  equipe especializada, com conhecimento em diversas áreas e em
                  constante atualização para proporcionar uma intervenção de
                  qualidade com técnicas baseadas em evidência.
                </div>
                <div className="col-lg-12">
                  <a href="/equipe" className={styles.botao}>
                    Conheça nossa Equipe
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 order-sm-2 order-lg-1">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <img
                  className={styles.fotoConhecaEquipe}
                  src={fotoConhecaEquipe}
                  alt="Diretora Michelle Procópio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <Card
              titulo="Missão"
              texto="Oferecer apoio às pessoas com autismo e suas famílias para melhorar sua qualidade de vida e promover sua inclusão nesses ambientes. Trabalhar de forma integrada e coordenada com o os demais profissionais que atendem a criança, com a escola e a família para alcançar melhores resultados."
              cor="azul"
            />
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <Card
              titulo="Visão"
              texto="Ser a entidade de referência no cuidado de pessoas com autismo e suas famílias, bem como na defesa de seus direitos. Promover a inclusão de pessoas com autismo em todas as áreas para um mundo onde todos os indivíduos com autismo atingem seu potencial máximo."
              cor="vermelho"
            />
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <Card
              titulo="Valores"
              texto="Oferecer intervenções terapêuticas atuais baseadas em evidência, pensando sempre na individualidade de cada criança e sua família. Nossos valores são de inclusão, família, compromisso, envolvimento eficiência
              sensibilidade, proximidade,  inovação."
              cor="amarelo"
            />
          </div>
        </div>
        <img src={florVermelha} alt=" " className={styles.florVermelha} />
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Sobre nós" />;

export default IndexPage;
