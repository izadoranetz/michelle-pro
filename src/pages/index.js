import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import Carrossel from '../components/Carrossel';

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Carrossel />
  </Layout>
);

export const Head = () => <Seo title="Home" />

export default IndexPage;
