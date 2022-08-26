import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import ICards from '../../Interfaces/Cards';
import cards from '../../cards.json';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICards[] | []>([]);

  useEffect(() => {
    setAllCards(cards);
  }, [allCards]);

  return (
    <SMain>
      <Components.Header
        active={ active }
        setActive={ setActive }
      />
      {active && <Components.FilterCard />}
      <ul>
        {allCards.map(({ id, name, iconUrls }) => (
          <li key={ id }>
            <img src={ iconUrls.medium } alt={ name } />
          </li>
        ))}
      </ul>
      <Components.Footer />
    </SMain>

  );
};

export default Cards;
