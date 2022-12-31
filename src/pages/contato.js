import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from './contato.module.scss';

const Contato = () => (
  <Layout>
    <section className={styles.mainContatos}>
      <div className="container">
        <div className={styles.tituloPrincipal}>
          <span>Entre em contato</span>
        </div>
        <div className={styles.formularioContainer}>
          <div className={styles.formularioContent}>
            <form action="" method="post">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome:"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail:"
                required
              />
              <textarea id="mensagem" name="mensagem" rows="8" cols="30" required>
                Mensagem:
              </textarea>
             <div className={styles.formularioEnviar}><input type="submit" value="Enviar" /></div> 
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Contato" />;

export default Contato;
