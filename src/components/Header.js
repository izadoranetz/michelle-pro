import React from 'react';
import Navbar from './NavBar';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './Header.module.scss';

function Header() {
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
    <header>
      <div className={styles.navbarArea}>
        <div className="container">
          <div className="row align-items-center">
            <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
