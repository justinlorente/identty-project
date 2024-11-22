import React, { useState } from 'react';
import AccordionAbout from './AccordionAbout';
import AccordionItemProducts from './AccordionItemProducts';

const Accordion = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [itemProductOpen, setItemProductOpen] = useState(false);
  const cursorImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NSIgaGVpZ2h0PSI4NSIgdmlld0JveD0iMCAwIDg1IDg1Ij4KICA8ZyBpZD0iR3J1cG9fMTE1MiIgZGF0YS1uYW1lPSJHcnVwbyAxMTUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTU2IC01NTkpIj4KICAgIDxjaXJjbGUgaWQ9IkVsaXBzZV81MCIgZGF0YS1uYW1lPSJFbGlwc2UgNTAiIGN4PSI0Mi41IiBjeT0iNDIuNSIgcj0iNDIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTU2IDU1OSkiIGZpbGw9IiMyNzJmMzciLz4KICAgIDxnIGlkPSJHcnVwb18xMTQ2IiBkYXRhLW5hbWU9IkdydXBvIDExNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjE3IC0wLjA2NCkiPgogICAgICA8cGF0aCBpZD0iVHJhemFkb18zIiBkYXRhLW5hbWU9IlRyYXphZG8gMyIgZD0iTTg1OC4zMzQsMTExOS45NzhsNC40MzUtNC40MzUsNC40MzUsNC40MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MzUuNzYxIC0yNjEuMjcpIHJvdGF0ZSg5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJUcmF6YWRvXzM3OSIgZGF0YS1uYW1lPSJUcmF6YWRvIDM3OSIgZD0iTTg1OC4zMzQsMTExOS45NzhsNC40MzUtNC40MzUsNC40MzUsNC40MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MzguNzYgMTQ2NC4yNykgcm90YXRlKC05MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

  const openAccordionAbout = aboutOpen && !itemProductOpen ? 'opened' : '';
  const openAccordionProduct = itemProductOpen && !aboutOpen ? 'opened' : '';
  const closeAccordionProduct = openAccordionAbout === 'opened' ? 'close' : '';
  const closeAccordionAbout = openAccordionProduct === 'opened' ? 'close' : '';
  const toggleCursors = openAccordionProduct === 'opened' ? cursorImg : '';


  const onToggleAboutAccordion = () => {
    setAboutOpen((prevState) => !prevState);
    setItemProductOpen(false);
  };
  const onToggleProductAccordion = () => {
    setAboutOpen(false);
    setItemProductOpen((prevState) => !prevState);
  };
  return (
    <div className="Accordion"  id="box-1">
      <div className={`AccordionItem ${openAccordionAbout} ${closeAccordionAbout}`}>
        <AccordionAbout />
        <div className="AccordionItem-btnWrapper">
          <span
            onClick={onToggleAboutAccordion}
            className="AccordionItem-btnToggle"
          />
          <p   data-cursor-exclusion data-cursor-color="#000" className="text">somos</p>
        </div>
      </div>
      <div
        className={`AccordionItem ${openAccordionProduct} ${closeAccordionProduct}`}
      >
        <div className="AccordionItem-btnWrapper"  >
          <span
            onClick={onToggleProductAccordion}
            className="AccordionItem-btnToggle"
          />
          <p className="text">proyectos</p>
        </div>
        <AccordionItemProducts toggleCursors={toggleCursors} />
      </div>
    </div>
  );
};

export default Accordion;
