import React from 'react';
import SeeMoreButton from '../SeeMoreButton';

const HomeOursite = () => {
  return (
    <div className="HomeOursite">
      <div className="HomeOursite-image" data-cursor-exclusion/>
      <div className="HomeOursite-content" >
        <div className="text"  data-cursor-exclusion data-cursor-size="80px" data-cursor-color="#261502">
          A lo largo de los años hemos pensado mucho en cómo equilibrar el{' '}
          <span className="text-dark">
            ser buena gente con hacer buen trabajo y dirigir un buen negocio
          </span>
          . De esta reflexión nace nuestro Manifiesto, que tienen en cuenta
          tanto nuestro equipo, como a nuestros Partners, como a nuestros
          clientes.
        </div>
        <div className="HomeOursite-btnWrapper">
        <SeeMoreButton text="ver manifesto" />
        </div>
      </div>
    </div>
  );
};

export default HomeOursite;