import React, { useRef } from 'react';
import AccordionProductsItem from './AccordionProductsItem';
import { useDraggable } from 'react-use-draggable-scroll';

const AccordionItemProducts = (props) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const { toggleCursors } = props;

  return (
    <div className="AccordionItemProducts no-scrollbar " ref={ref} {...events}>
      <AccordionProductsItem
        image="project-1"
        service="retail hub"
        brand="KoolHub"
        toggleCursors={toggleCursors}
      />

      <AccordionProductsItem
        image="project-2"
        service="servicio de belleza"
        brand="Bellify"
        toggleCursors={toggleCursors}
      />

      <AccordionProductsItem
        image="project-3"
        service="heladeria artesana"
        brand="Selvática"
        toggleCursors={toggleCursors}
      />
      <AccordionProductsItem
        image="project-4"
        service="snowbikes"
        brand="Artic"
        toggleCursors={toggleCursors}
      />
    </div>
  );
};

export default AccordionItemProducts;
