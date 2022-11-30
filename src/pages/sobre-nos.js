import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/sobre-nos-hero.png';

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Sobre"
      segParteTitulo="Nós"
      subtitulo="Diretora"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
  </Layout>
);

export const Head = () => <Seo title="Sobre nós" />;

export default IndexPage;
