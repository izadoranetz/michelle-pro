import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/fonts/fonts.css";
import * as styles from "./Layout.module.scss";

import { ArrowUp } from "phosphor-react";

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

  const [mostrarScrollToTop, setMostrarScrollToTop] = React.useState(false);

  const onMostrarScroll = () => {
    if(!document){
      return;
    }
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setMostrarScrollToTop(true);
    } else if (scrolled <= 300) {
      setMostrarScrollToTop(false);
    }
  };


  if(window){
    window.addEventListener('scroll', onMostrarScroll);
  }


  return (
    <div className={styles.pageContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className={styles.floating}>
        <div className={styles.whatsApp}>
          <a href="https://wa.me/556184623608">
            <img src={whatsappLogo} />
          </a>
        </div>
        {mostrarScrollToTop && (
          <div
            className={styles.scrollToTop}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <ArrowUp size={32} />
          </div>
        )}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
