import React from 'react';
import { FcSearch } from 'react-icons/fc';
import logo from '../../Utils/images';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo clash royale" />
        <span>CLASH ROYALE - CARDS</span>
      </div>
      <div>
        <FcSearch />
      </div>
    </header>
  );
}

export default Header;
