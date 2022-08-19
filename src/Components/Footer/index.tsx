import React from 'react';
import logo from '../../Utils/Images/images_urls';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <div>
        <span>{`@ ${year}`}</span>
      </div>
      <div>
        <img src={ logo } alt="logo clash royale" />
      </div>
    </footer>
  );
};

export default Footer;
