import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import Carrossel from '../components/Carrossel';
import Box from '../components/Box';
import GrandesNumeros from '../components/GrandesNumeros';
import OutrosServicos from '../components/OutrosServicos';
import FotoDestaque from '../components/FotoDestaque';
import Accordion from '../components/Accordion';
import CtaConsulta from '../components/CtaConsulta';
import fotoCrianca from '../assets/images/foto-home.png';
import TituloNuvem from '../components/TituloNuvem';
import fotoCriancas from '../assets/images/foto-dinossauro.png';

const itens = [
  {
    titulo: 'O que é o denver?',
    texto:
      'Abordagem abrangente para todas as competências do desenvolvimento infantil para que superem os atrasos e alcancem os marcos do desenvolvimento e alcançarem os melhores resultados ao longo da vida.',
    cor: 'azul',
  },
];

const IndexPage = () => (
  <Layout>
    <HeroSection
      primParteTitulo="É sobre "
      segParteTitulo="cuidado"
      subtitulo="Conheça a clínica referência em intervenção precoce para
    crianças com autismo"
      urlImagem={fotoCrianca}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <TituloNuvem titulo="O que fazemos de melhor" cor="fundoBrancoFlor" />
    <Carrossel />
    <Box />
    <GrandesNumeros />
    <OutrosServicos />
    <FotoDestaque
      urlImagem={fotoCriancas}
      alt="Imagem de duas crianças brincando juntas"
    />
    {/* <Accordion
      titulo="O que é o denver?"
      texto="Abordagem abrangente para todas as competências do desenvolvimento infantil para que superem os atrasos e alcancem os marcos do desenvolvimento e alcançarem os melhores resultados ao longo da vida."
      url="/denver"
    /> */}
    <Accordion itens={itens} url="/denver" />
    <CtaConsulta />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
