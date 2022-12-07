import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/metodo-denver-hero.png';

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Em"
      segParteTitulo="construção"
      // subtitulo="Diretora"
      urlImagem={fotoHero}
      altImagem=" "
    />
  </Layout>
);

export const Head = () => <Seo title="Em construção" />;

export default IndexPage;
