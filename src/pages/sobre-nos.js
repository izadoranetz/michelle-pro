import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import fotoHero from '../assets/images/sobre-nos-hero.png';
import TituloNuvem from '../components/TituloNuvem';
import * as styles from './sobreNos.module.scss';

const IndexPage = () => (
  <Layout>
    <section className={styles.heroSection}>
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
                  className={styles.imgCrianca}
                  src={fotoHero}
                  alt="Diretora Michelle Procópio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6 col-sm-12">
            (imagem)
            
          </div>
          <div className="col-lg-6 col-sm-12">
        
            texto
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Sobre nós" />;

export default IndexPage;
