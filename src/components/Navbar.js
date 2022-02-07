import { useState } from 'react';

import NavLinks from './NavbarLinks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>

      <NavLinks className={isMenuOpen ? 'open' : 'close'} />

      <button className='toggle' onClick={toggleMenu}>
        Submit
      </button>
    </nav>
  );
};

export default Navbar;