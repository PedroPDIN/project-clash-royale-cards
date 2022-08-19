import React from 'react';
import logo from '../../Utils/Images/images_urls';

import SFooter from './styled';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <SFooter>
      <div>
        <span>{`@ ${year}`}</span>
      </div>
      <div>
        <img src={ logo } alt="logo clash royale" />
      </div>
    </SFooter>
  );
};

export default Footer;
