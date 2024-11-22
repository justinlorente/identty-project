import React from 'react';
import PropTypes from 'prop-types';

const AccordionProductsItem = (props) => {
  const { image, service, brand, toggleCursors } = props;
  const customClass = toggleCursors;
  const customSize = toggleCursors === '' ? '14px' : '80px'

  return (
    <div className="AccordionProductsItem">
      <div className={`AccordionProductsItem-image ${image}`} data-cursor-background-image={customClass} data-cursor-size={customSize} />
      <div className="AccordionProductsItem-information">
        <p className="service">{service}</p>
        <p className="brand">{brand}</p>
      </div>
    </div>
  );
};
AccordionProductsItem.propTypes = {
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default AccordionProductsItem;
