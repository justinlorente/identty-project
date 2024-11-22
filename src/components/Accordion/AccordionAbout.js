import React from 'react';

const AccordionAbout = () => {
  return (
    <div className="AccordionAbout">
      <div className="AccordionAbout-title">
        <div data-cursor-exclusion style={{backgroundColor: '#fff'}}>
          We are
        </div>
        <div className="great" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
          great{' '}
          <div className="text-list" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
            <div className="text red-line" />
            <div className="text"> people </div>
            <div className="text"> strategist </div>
            <div className="text"> creatives </div>
            <div className="text"> designers </div>
            <div className="text"> ideas</div>
          </div>
        </div>
        <div  data-cursor-exclusion style={{backgroundColor: '#fff'}} >
               that work
        </div>
      </div>
      <div className="AccordionAbout-body">
        <div className="content">
          <h3 className="title" data-cursor-exclusion style={{backgroundColor: '#fff'}}> 
            Agencia creativa <br /> especializada en negocio, diseño y estrategia a
            medida.
          </h3>
          <p className="subtitle" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
            <span className="subtitle-bold">
              {' '}
              Transformamos marcas y negocios creando soluciones a medida
            </span>{' '}
            centradas en las personas, a través del diseño, la tecnología, la
            estrategia y la innovación empresarial.
          </p>
          <div className="reel" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
            <p className="reel-title">ver reel</p>
            <span className="reel-arrow">
              <span className="arrow-right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionAbout;
