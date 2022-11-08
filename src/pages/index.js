import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';

const IndexPage = () => (
  <Layout>
    <HeroSection />
  </Layout>
);

export const Head = () => <Seo title="Home" />

export default IndexPage;
