import { Phone, Envelope, FacebookLogo, InstagramLogo } from 'phosphor-react';
import React from 'react';
import './footer.scss';

function Footer() {
  return (    
    <footer className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row contato-infos">
            <div className="col-lg-4">
            <h3 className="titulos-footer">Contato</h3>
            <ul>
                <li><Phone size={32} weight="fill" className="icones-footer shadow-sm" /></li>
                <li>(61) 98462-3608</li>
                <li><Envelope size={32} weight="fill" className="icones-footer shadow-sm" /></li>
                <li>michelleprocopio@clifali.com.br</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="titulos-footer">Menu</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="titulos-footer">Redes Sociais</h3>
            <ul>
                <li><FacebookLogo size={32} weight="fill" className="icones-footer shadow-sm" /></li>
                <li>/Michelle Procópio</li>
                <li><InstagramLogo size={32} weight="fill" className="icones-footer shadow-sm" /></li>
                <li>@michelleprocopio</li>
            </ul>
          </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
