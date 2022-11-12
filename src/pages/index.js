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

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Carrossel />
    <Box />
    <GrandesNumeros />
    <OutrosServicos />
    <FotoDestaque />
    <Accordion
      titulo="O que é o denver?"
      texto="Abordagem abrangente para todas as competências do desenvolvimento infantil para que superem os atrasos e alcancem os marcos do desenvolvimento e alcançarem os melhores resultados ao longo da vida."
    />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
