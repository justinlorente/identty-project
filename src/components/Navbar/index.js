import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="Navbar-wrapper">
        <div className="Navbar-logo" data-cursor-exclusion>
          <div className="brand-logo" />
          <div className="brand-name" data-cursor-exclusion  />
        </div>
        <div className="Navbar-right">
          <div className="Navbar-collaboration" data-cursor-exclusion>
            <Link href="/">¿Colaboramos?</Link>
          </div>
          <div className="Navbar-menu">
            <span />
            <span />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
