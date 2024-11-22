import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar';
import FooterNavigation from '../Footer/FooterNavigation';
import CustomCursor from '../CustomCursor';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenFooter = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <CustomCursor />
      <Navbar />
      {children}
      <FooterNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openFooter={onOpenFooter}
      />
    </>
  );
};

export default Layout;
