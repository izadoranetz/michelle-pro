import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../assets/images/logo.svg';
import * as styles from './Navbar.module.scss';
import '../assets/fonts/fonts.css';

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'nav-link active' }
    : { className: 'nav-link' };
};

const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;

const Navbar = () => {
  return (
    <nav className={`navbar navbar-dark navbar-expand-md`}>
      <div className={`container-fluid ${styles.containerFluid}`}>
        <img
          src={logo}
          className={`navbar-brand ${styles.navbarCinza}`}
          alt="Michelle Procópio"
        />

        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse flex-grow-0`}
          id="main-navbar"
        >
          <ul className={`navbar-nav ml-auto`}>
            <li className={`nav-item ${styles.linkNavegacao}`}>
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className={`nav-item ${styles.linkNavegacao}`}>
              <ExactNavLink to="/servicos">Serviços</ExactNavLink>
            </li>
            <li className={`nav-item ${styles.linkNavegacao}`}>
              <ExactNavLink to="/denver">Modelo Denver</ExactNavLink>
            </li>
            <li className={`nav-item ${styles.linkNavegacao}`}>
              <ExactNavLink to="/sobre-nos">Sobre Nós</ExactNavLink>
            </li>
            <li className={`nav-item ${styles.linkNavegacao}`}>
              <ExactNavLink to="/equipe">Equipe</ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
// import './Navbar.scss';
// import '../assets/fonts/fonts.css';

// const isActive = ({ isCurrent }) => {
//   return isCurrent
//     ? { className: 'nav-link active' }
//     : { className: 'nav-link' };
// };

// const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;

// const Navbar = () => {
//   return (

//     <nav className="navbar navbar-expand-md navbar-dark">
//       <div className="container-fluid">

//         <Link to="/" className="navbar-brand" href="#">
//           <StaticImage
//             src="../assets/images/logo.svg"
//             alt="Michelle Procópio"
//             layout="fixed"
//             height={80}
//             id="logoMichelle"
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-navbar"
//           aria-controls="main-navbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="main-navbar">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <ExactNavLink to="/">Home</ExactNavLink>
//             </li>
//             <li className="nav-item">
//               <ExactNavLink to="/servicos">Serviços</ExactNavLink>
//             </li>
//             <li className="nav-item">
//               <ExactNavLink to="/metodo-denver">Método Denver</ExactNavLink>
//             </li>
//             <li className="nav-item">
//               <ExactNavLink to="/sobre-nos">Sobre Nós</ExactNavLink>
//             </li>
//             <li className="nav-item">
//               <ExactNavLink to="/equipe">Equipe</ExactNavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Navbar.defaultProps = {
//   siteTitle: ``,
// };

// export default Navbar;
