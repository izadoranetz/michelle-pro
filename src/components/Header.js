import React from 'react';
import Navbar from './Navbar';
import { useStaticQuery, graphql } from 'gatsby';

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
      <div className="navbar-area">
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
