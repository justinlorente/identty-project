import React from 'react';
import PropTypes from 'prop-types';

const SeeMoreButton = (props) => {
  const  {text} = props;
  return (
    <div className="SeeMoreButton-btnWrapper">
      <span className="btn-text">
        <span>{text}</span>
      </span>
      <div className="icon-wrapper">
        <div className="icon-border">
          <span className="icon" />
        </div>
      </div>
    </div>
  );
};

SeeMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SeeMoreButton;
