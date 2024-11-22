import React from 'react';
import Marquee from 'react-fast-marquee';

const CustomMarquee = () => {
  return (
    <div>
      <Marquee loop={0} speed={90} pauseOnHover>
      <div className="service">
          <h3 className="text-dark">Think</h3>
        </div>
        <div className="service">
          <h3 className="text-light">Brand</h3>
        </div>
        <div className="service">
          <h3 className="text-dark">Vídeo</h3>
        </div>
        <div className="service large">
          <h3 className="text-light">Digital Way</h3>
        </div>
        <div className="service large">
          <h3 className="text-dark">Retail</h3>
        </div>
      </Marquee>
      <Marquee direction="right" loop={0} speed={90} pauseOnHover>
      <div className="service">
          <h3 className="text-dark">Ui & UX</h3>
        </div>
        <div className="service">
          <h3 className="text-light">E-commerce</h3>
        </div>
        <div className="service">
          <h3 className="text-dark">Graphic</h3>
        </div>
        <div className="service large">
          <h3 className="text-light">Innovation</h3>
        </div>
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
