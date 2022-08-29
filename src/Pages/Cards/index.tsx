import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import ICards from '../../Interfaces/Cards';
import cards from '../../cards.json';
import cardSort from '../../Utils/helpers';

import SMain from './styled';

const Cards = () => {
  const [active, setActive] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICards[] | []>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [rarityNumber, setRarityNumber] = useState<number>(0);

  useEffect(() => {
    const initialCards = cards
      .filter((card) => (
        card.name !== 'Barbarian Launcher' && card.name !== 'Super Mini P.E.K.K.A'
      ))
      .filter((card) => card.name.toLowerCase().startsWith(searchName!.toLowerCase()))
      .sort(cardSort);

    const newCards = cards
      .filter((card) => (
        card.name !== 'Barbarian Launcher' && card.name !== 'Super Mini P.E.K.K.A'
      ))
      .filter((card) => card.name.toLowerCase().startsWith(searchName!.toLowerCase()))
      .filter((card) => rarityNumber > 0 && card.maxLevel === rarityNumber)
      .sort(cardSort);

    if (rarityNumber === 0) {
      setAllCards(initialCards);
    } else {
      setAllCards(newCards);
    }
  }, [searchName, rarityNumber]);

  return (
    <SMain>
      <Components.Header
        active={ active }
        setActive={ setActive }
      />

      {active && (
        <Components.FilterCard
          searchName={ searchName }
          setSearchName={ setSearchName }
          rarityNumber={ rarityNumber }
          setRarityNumber={ setRarityNumber }
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
