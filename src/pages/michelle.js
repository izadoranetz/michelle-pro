import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import fotoHero from '../assets/images/michelle-hero.png';
import HeroSection from '../components/HeroSection';

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
  </Layout>
);

export const Head = () => <Seo title="Michelle Procopio" />;

export default Michelle;
