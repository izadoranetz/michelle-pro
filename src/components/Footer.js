import { Phone, Envelope, FacebookLogo, InstagramLogo } from 'phosphor-react';
import React from 'react';
import * as styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container-fluid`}>
        <div className={`row ${styles.contatoInfos}`}>
        <div className={`col-sm-12 col-md-12 col-lg-4 order-sm-1 order-lg-2`}>
            <h3 className={`${styles.titulosFooter}`}>Menu</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Trabalhe conosco</a>
              </li>
            </ul>
          </div>
          <div className={`col-sm-12 col-md-12 col-lg-4 order-sm-2 order-lg-1`}>
            <h3 className={`${styles.titulosFooter}`}>Contato</h3>
            <ul>
              <li>
                <Phone
                  size={32}
                  weight="fill"
                  className={`${styles.iconesFooter} shadow-sm`}
                />
              </li>
              <li>(61) 98462-3608</li>
              <li>
                <Envelope
                  size={32}
                  weight="fill"
                  className={`${styles.iconesFooter} shadow-sm`}
                />
              </li>
              <li>michelleprocopio@clifali.com.br</li>
            </ul>
          </div>
          <div className={`col-sm-12 col-md-12 col-lg-4 order-sm-3 order-lg-3`}>
            <h3 className={`${styles.titulosFooter}`}>Redes Sociais</h3>
            <ul>
              <li>
                <FacebookLogo
                  size={32}
                  weight="fill"
                  className={`${styles.iconesFooter} shadow-sm`}
                />
              </li>
              <li><a href="https://www.facebook.com/dramichelleprocopiovillar/" target="_blank">/Michelle Procópio</a></li>
              <li>
                <InstagramLogo
                  size={32}
                  weight="fill"
                  className={`${styles.iconesFooter} shadow-sm`}
                />
              </li>
              <li><a href="https://www.instagram.com/michelleprocopio/" target="_blank">@michelleprocopio</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
