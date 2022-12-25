import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/metodo-denver-hero.png';
import BoxOqueEModeloDenver from '../components/BoxOqueEModeloDenver';
import AbordagemAbrangente from '../components/AbordagemAbrangente';
import FotoDestaque from '../components/FotoDestaque';
import fotoDenver from '../assets/images/foto-denver.png';
import BoxPqMetodoDenver from '../components/BoxPqMetodoDenver';
import IntervencaoAjuda from '../components/IntervencaoAjuda';

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Modelo"
      segParteTitulo="Denver"
      subtitulo="Eleito pela Time Magazine em 2012 como uma das maiores descobertas da medicina nos últimos anos, foi denvolvido pelo MIND Institute na Califórnia"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <AbordagemAbrangente />
    <BoxOqueEModeloDenver />
    <FotoDestaque urlImagem={fotoDenver} alt="Foto de uma criança em frente a uma mesa brincando" />
    <BoxPqMetodoDenver />
    <IntervencaoAjuda />
  </Layout>
);

export const Head = () => <Seo title="Método Denver" />;

export default IndexPage;
