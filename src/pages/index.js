import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">É sobre cuidado</h1>
          <p className="lead text-muted">
            {' '}
            Conheça a clínica referência em intervenção precoce para crianças com autismo 
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Home" />

export default IndexPage;
