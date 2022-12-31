import * as React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import fotoHero from '../assets/images/metodo-denver-hero.png';
import BoxOqueEModeloDenver from '../components/BoxOqueEModeloDenver';
import AbordagemAbrangente from '../components/AbordagemAbrangente';
import FotoDestaque from '../components/FotoDestaque';
import fotoDenver from '../assets/images/foto-denver.png';
import BoxPqMetodoDenver from '../components/BoxPqMetodoDenver';
import IntervencaoAjuda from '../components/IntervencaoAjuda';
import Accordion from '../components/Accordion';
import arcoIris from '../assets/images/arco-iris2.png';
import bolinhasVermelhas from '../assets/images/bolinhas-vermelhas-preenchidas.png';
import * as styles from './denver.module.scss';

const itens = [
  {
    titulo: 'Diferenciais',
    texto:
      'Contamos com profissionais de diferentes áreas de formação, como: psicólogo, fonoaudiólogo, analista do comportamento e educador físico na nossa equipe. Tudo pensado para que a criança tenha a melhor estrutura na fase mais importante do seu desenvolvimento ',
    cor: 'vermelho',
  },
  {
    titulo: 'Nosso trabalho',
    texto:
      'Nossa equipe trabalha de forma individualizada para que cada criança cresça e se desenvolva alcançando seu pleno potencial. Oferecemos também programas de orientação para as famílias tendo para que tenham um papel ativo na estimulação e evolução dos seus pequenos.',
    cor: 'azul',
  },
  {
    titulo: 'É adequado para todas as crianças com TEA?',
    texto:
      'O modelo prevê possíveis necessidades na alteração da intervenção quando as crianças não estão evoluindo bem, permitindo a utilização de práticas baseadas em evidência para personalizar o programa de forma individualizada. Essas adaptações podem levar a procedimentos de ensino mais estruturados ou até atividades em diferentes ambientes, como parquinhos e escolas e com interação com diferentes.',
    cor: 'amarelo',
  },
  {
    titulo: 'Porque o ensino intensivo?',
    texto:
      'O autismo é um transtorno que envolve vários déficits em diferentes áreas e com isso as crianças precisam aprender diariamente para preencher as lacunas de seu desenvolvimento e a alta intensidade da intervenção possibilita a aprendizagem em diversos domínios do desenvolvimento em um ritmo elevado.',
    cor: 'vermelho',
  },
  {
    titulo: 'Como funciona no contexto domiciliar?',
    texto:
      'A intervenção é de 1:1 (aplicador e criança) com duração média de 3 horas diárias, de segunda a sexta-feira, totalizando 15 horas semanais, sendo realizada no ambiente domiciliar da criança. A depender da idade, questões pessoais e comportamentais da criança, as horas diárias podem ser modificadas, podendo aumentar ou diminuir sua duração de acordo com as necessidades individuais. ',
    cor: 'azul',
  },
  {
    titulo: 'Como são os procedimentos de ensino?',
    texto:
      'Os procedimentos de ensino são inseridos em atividades lúdicas, permitindo que muitas aprendizagens ocorram durante a brincadeira. Primeiro avaliamos com o checklist do ESDM, depois selecionamos o treinamento individualizado e personalizado da assistente terapêutica de acordo com o perfil de cada criança. Esse treinamento contém 2 ou 3 objetivos de ensino a curto prazo e são projetados para serem alcançados num período médio de 12 semanas. A meta de intervenção é definida e adaptada ao longo das semanas pela supervisora do caso. A cada 12 semanas será realizada uma nova avaliação para direcionamento do próximo plano terapêutico. ',
    cor: 'amarelo',
  },
  {
    titulo: 'Crianças acima de 5 anos',
    texto:
      'Antigamente as pesquisas científicas orientavam o uso do ESDM até os 5 anos, mas atualmente novas pesquisas apontam que algumas crianças podem se beneficiar do modelo até os 6 anos, sendo necessário analisar caso a caso. A partir dos 6 anos o ESDM não é mais indicado, mesmo que as competências das crianças estejam na faixa de 1 a 5 anos, pois o currículo de avaliação e o estilo de intervenção não é adequado para crianças mais velhas.',
    cor: 'vermelho',
  },
  {
    titulo: 'Resultados das pesquisas científicas',
    texto:
      'O ESDM é uma prática baseada em evidência! Existem muitos estudos, pesquisas e artigos científicos que comprovam a eficácia desse modelo e embasam a prática clínica.',
    cor: 'azul',
  },
];

const Denver = () => (
  <Layout>
    <HeroSection
      primParteTitulo="Modelo"
      segParteTitulo="Denver"
      subtitulo="Eleito pela Time Magazine em 2012 como uma das maiores descobertas da medicina nos últimos anos, foi denvolvido pelo MIND Institute na Califórnia"
      urlImagem={fotoHero}
      altImagem="Uma criança usando máscara sobre os olhos"
    />
    <AbordagemAbrangente />
    <BoxOqueEModeloDenver />
    <FotoDestaque
      urlImagem={fotoDenver}
      alt="Foto de uma criança em frente a uma mesa brincando"
    />
    <BoxPqMetodoDenver />
    <IntervencaoAjuda />
    <div className={`container-fluid ${styles.accordion}`}>
      <img src={arcoIris} className={styles.arcoIris} alt=" " />
      <Accordion itens={itens} />
      <img src={bolinhasVermelhas} className={styles.bolinhasVermelhas} alt=" " />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Modelo Denver" />;

export default Denver;
