import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/fonts/fonts.css";
import * as styles from "./Layout.module.scss";

import { WhatsappLogo } from "phosphor-react";

import whatsappLogo from "../assets/images/whatsapp_logo.png";

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
      <a href="https://wa.me/556198463608">
        <img src={whatsappLogo} className={styles.floating} />
      </a>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
