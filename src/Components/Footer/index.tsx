import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import logo from '../../Utils/Images/images_urls';

import SFooter from './styled';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <SFooter>
      <div>
        <span>{`@${year}`}</span>
        <div className="social_person">
          <a href="https://www.linkedin.com/in/in-pedrolima">
            <AiFillGithub />
          </a>
          <a href="https://github.com/PedroPDIN">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div>
        <a href="https://clashroyale.com/pt/">
          <img src={ logo } alt="logo clash royale" />
        </a>
      </div>
    </SFooter>
  );
};

export default Footer;
