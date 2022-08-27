import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import ICards from '../../Interfaces/Cards';
import cards from '../../cards.json';
import cardSort from '../../Utils/helpers';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICards[] | []>([]);

  useEffect(() => {
    const newCards = cards
      .filter((card) => (
        card.name !== 'Barbarian Launcher' && card.name !== 'Super Mini P.E.K.K.A'
      )).sort(cardSort);

    setTimeout(() => {
      setAllCards(newCards);
    }, 500);
  }, [allCards]);

  return (
    <SMain>
      <Components.Header
        active={ active }
        setActive={ setActive }
      />
      {active && <Components.FilterCard />}
      <article>
        {allCards.map(({ id, name, iconUrls }) => (
          <a key={ id } href="ainda não possui nenhum link">
            {/* <span>{ name }</span> */}
            <img src={ iconUrls.medium } alt={ name } />
          </a>
        ))}
      </article>
      <Components.Footer />
    </SMain>

  );
};

export default Cards;
