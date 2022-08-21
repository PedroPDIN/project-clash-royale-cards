import React, { useState } from 'react';
import Components from '../../Components';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <SMain>
      <Components.Header
        active={ active }
        setActive={ setActive }
      />
      {active && <Components.FilterCard />}
      <h1>Aqui está os cards</h1>
      <Components.Footer />
    </SMain>
  );
};

export default Cards;
