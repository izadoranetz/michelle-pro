import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/nossos-servicos-hero.png';
import BoxServicos from '../components/BoxServicos';
import ComoFunciona from '../components/ComoFunciona';
import Carrossel from '../components/Carrossel';

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Nossos"
      segParteTitulo="Serviços"
      subtitulo="Cada pessoa é única, por isso ofereçemos um serviço de suporte individual e 100% personalizado"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <BoxServicos />
    <ComoFunciona />
    <Carrossel />
  </Layout>
);

export const Head = () => <Seo title="Serviços" />;

export default IndexPage;
