import React from 'react';
import { FcSearch } from 'react-icons/fc';

import logo from '../../Utils/Images/images_urls';
import SHeader from './styled';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ active, setActive }: Props) => {
  const linkClashRoyale: string = 'https://clashroyale.com/pt/';
  return (
    <SHeader>
      <div>
        <a href={ linkClashRoyale }>
          <img src={ logo } alt="logo clash royale" />
        </a>
        <span>CLASH ROYALE - CARDS</span>
      </div>
      <button type="button" onClick={ () => setActive(!active) }>
        <FcSearch />
      </button>
    </SHeader>
  );
};

export default Header;
