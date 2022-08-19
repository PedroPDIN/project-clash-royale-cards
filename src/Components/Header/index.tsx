import React from 'react';
import { FcSearch } from 'react-icons/fc';
import logo from '../../Utils/Images/images_urls';

import SHeader from './styled';

const Header = () => (
  <SHeader>
    <div>
      <img src={ logo } alt="logo clash royale" />
      <span>CLASH ROYALE - CARDS</span>
    </div>
    <div>
      <FcSearch />
    </div>
  </SHeader>
);

export default Header;
