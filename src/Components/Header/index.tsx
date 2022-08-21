import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { GiCancel } from 'react-icons/gi';

import logo from '../../Utils/Images/images_urls';
import SHeader from './styled';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ active, setActive }: Props) => (
  <SHeader>
    <div>
      <a href="https://clashroyale.com/pt/">
        <img src={ logo } alt="logo clash royale" />
      </a>
      <span>CLASH ROYALE - CARDS</span>
    </div>
    <button type="button" onClick={ () => setActive(!active) }>
      {active ? <GiCancel /> : <FcSearch />}
    </button>
  </SHeader>
);

export default Header;
