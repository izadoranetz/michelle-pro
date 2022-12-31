import * as React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from './paraProfissionais.module.scss';

const ParaProfissionais = () => (
  <Layout>
    <section className={styles.mainProfissionais}>
      <div className="container">
        <div className={styles.tituloPrincipal}>
          <span>Para profissionais</span>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12 mb-4">
            <Card
              titulo="Supervisão"
              texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  diam nonummy nibh tincidunt ut  "
              cor="azul"
            />
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12 mb-4">
            <Card
              titulo="Treinamento e Consultoria"
              texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  diam nonummy nibh tincidunt ut  "
              cor="vermelho"
            />
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12 mb-4">
            <Card
              titulo="Cursos"
              texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  diam nonummy nibh tincidunt ut  "
              cor="amarelo"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Para profissionais" />;

export default ParaProfissionais;
