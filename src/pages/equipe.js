import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/nossa-equipe-hero.png';
import CardsEquipe from '../components/CardsEquipe';


const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Nossa"
      segParteTitulo="Equipe"
      subtitulo="Para ter o que há de melhor na fase mais importante para seu desenvolvimento, nossa equipe conta com profissionais de diferentes áreas de formação."
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <CardsEquipe />
  </Layout>
);

export const Head = () => <Seo title="Nossa equipe" />;

export default IndexPage;
