import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/index';

const FooterNavigation = (props) => {
  const { isOpen, setIsOpen, openFooter } = props;

  return (
    <>
      <div className="FooterNavigation">
        <div className="FooterNavigation-wrapper" data-cursor-exclusion> 
          <div className="left-button">
            <button
              className="open-footer-button"
              type="button"
              onClick={openFooter}
            >
              <span className="icon minus" />
              <span className="text-footer">Footer</span>
            </button>
            <button className="manifesto-footer-button" type="button">
              <span className="text-manifesto">Manifesto</span>
            </button>
          </div>
          <div>
            <button type="button">
              <span className="icon plus" />
            </button>
          </div>
        </div>
      </div>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

FooterNavigation.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

FooterNavigation.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
};

export default FooterNavigation;
