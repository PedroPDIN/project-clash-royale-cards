import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import ICards from '../../Interfaces/Cards';
import cards from '../../cards.json';
import cardSort from '../../Utils/helpers';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICards[] | []>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const newCards = cards
      .filter((card) => (
        card.name !== 'Barbarian Launcher' && card.name !== 'Super Mini P.E.K.K.A'
      ))
      .filter((card) => card.name.toLowerCase().startsWith(search.toLowerCase()))
      .sort(cardSort);

    setTimeout(() => {
      setAllCards(newCards);
    }, 200);
  }, [allCards]);

  return (
    <SMain>
      <Components.Header
        active={ active }
        setActive={ setActive }
      />

      {active && (
        <Components.FilterCard
          search={ search }
          setSearch={ setSearch }
        />
      )}

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
