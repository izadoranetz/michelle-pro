import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './Footer';
import Header from './Header';
import '../assets/fonts/fonts.css';
import * as styles from './Layout.module.scss';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
