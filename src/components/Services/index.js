import React from 'react';
import SeeMoreButton from '../SeeMoreButton';
import CustomMarquee from '../CustomMarquee';

const Services = () => {
  return (
    <div className="Home-services" data-cursor-exclusion>
      <CustomMarquee />
      <div className="Home-servicesBtnWrapper">
        <SeeMoreButton text="ver lo que hacemos" />
      </div>
    </div>
  );
};

export default Services;
