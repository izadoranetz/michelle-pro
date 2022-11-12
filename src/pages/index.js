import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import Carrossel from '../components/Carrossel';
import Box from '../components/Box';
import GrandesNumeros from '../components/GrandesNumeros';
import OutrosServicos from '../components/OutrosServicos';

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Carrossel />
    <Box />
    <GrandesNumeros />
    <OutrosServicos />
  </Layout>
);

export const Head = () => <Seo title="Home" />

export default IndexPage;
