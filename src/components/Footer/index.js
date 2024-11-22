import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { isOpen, setIsOpen } = props;
  const displayFooter = isOpen ? 'show-footer' : 'hide-footer';

  const onCloseFooter = () => {
    setIsOpen(false);
  };

  return (
    <footer className={`Footer ${displayFooter} no-scrollbar`}>
      <div
        className="Footer-header"
        data-cursor-exclusion
        data-cursor-color="#fff"
      >
        <div className="Footer-logo" />
        <div className="Footer-closeButton">
          <button type="button" onClick={onCloseFooter}>
            <span className="close-icon" />
          </button>
        </div>
      </div>
      <div className="Footer-wrapper">
        <div
          className="Footer-collaboration"
          data-cursor-exclusion
          data-cursor-color="#fff"
        >
          <h2 className="main-title">¿Colaboramos?</h2>
          <p className="content">
            En identty no hay clientes grandes o pequeños, hay clientes
            interesantes y propuestas de valor que nos enamoran.
          </p>
          <div className="contact">
            <div className="contact-arrow">
              <span className="arrow-right" />
            </div>
            <p className="contact-title">Hablemos</p>
          </div>
        </div>
        <div
          className="Footer-columns-wrapper"
          data-cursor-exclusion
          data-cursor-color="#fff"
        >
          <div className="Footer-column">
            <h3 className="title">Escríbenos</h3>
            <div className="content">
              <p className="email">hello@identty.com</p>
            </div>
          </div>
          <div className="Footer-column">
            <h3 className="title">Síguenos</h3>
            <div className="content">
              <ul className="socials">
                <li>
                  <i className="fa fa-instagram" />
                </li>
                <li>
                  <i className="fa fa-vimeo" />
                </li>
                <li>
                  <i className="fa fa-facebook-f" />
                </li>
                <li>
                  <i className="fa fa-linkedin" />
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-column">
            <h3 className="title">Visítanos</h3>
            <div className="branch-offices-wrapper">
              <div className="branch-office">
                <h4 className="branch-office-title">Barcelona</h4>
                <p className="address">
                  Rambla de Catalunya, 92 <br /> 5º 13 · 08008 (Barcelona)
                </p>
              </div>
              <div className="branch-office">
                <h4 className="branch-office-title">San Sebastián</h4>
                <p className="address">
                  Andre zigarrogileak plaza, 1. <br /> Pª 3. Solairua <br />{' '}
                  (Edif.Tabakalera), 20012 <br /> Donostia, Gipuzkoa
                </p>
              </div>
              <div className="branch-office">
                <h4 className="branch-office-title">Madrid</h4>
                <p className="address">
                  Calle de Silva 14, bajos. <br /> 28004 (Madrid)
                </p>
              </div>
              <div className="branch-office">
                <h4 className="branch-office-title">Andorra</h4>
                <p className="address">
                  Passatge d’Europa, 1, 4th floor, <br /> AD500 <br /> Andorra
                  la Vella <br /> Andorra
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Footer-rights"
          data-cursor-exclusion
          data-cursor-color="#fff"
        >
          <p className="brand">Weareidentty 2021©</p>
          <div className="policy">
            <p>Todos los derechos reservados</p>
            <span>|</span>
            <p>Política de privacidad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

Footer.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
};

export default Footer;
