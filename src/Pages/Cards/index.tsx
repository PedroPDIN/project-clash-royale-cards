import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import getAllCards from '../../Services/api/GetAllCards';
import ICards from '../../Interfaces/Cards';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);
  const [cards, setCards] = useState<ICards[] | []>([]);

  useEffect(() => {
    getAllCards().then((infoCards) => setCards(infoCards as any));
  }, [cards]);

  console.log(cards);

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
