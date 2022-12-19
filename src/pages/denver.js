import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/metodo-denver-hero.png';
import TituloNuvem from '../components/TituloNuvem';

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Método"
      segParteTitulo="Denver"
      subtitulo="Eleito pela Time Magazine em 2012 como uma das maiores descobertas da medicina nos últimos anos, foi denvolvido pelo MIND Institute na Califórnia"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <TituloNuvem titulo="O que é o modelo denver"/>
  </Layout>
);

export const Head = () => <Seo title="Método Denver" />;

export default IndexPage;
