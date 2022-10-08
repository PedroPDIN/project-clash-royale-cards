import React, { useState, useEffect } from 'react';
import Components from '../../Components';
import ICards from '../../Interfaces/Cards';
import cards from '../../cards.json';
import { cardSort, nameCardLink } from '../../Utils/helpers';

import SMain from './styled';

const Home = () => {
  const [active, setActive] = useState<boolean>(false);
  const [allCards, setAllCards] = useState<ICards[] | []>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [rarityNumber, setRarityNumber] = useState<number>(0);
  const [timeLoad, setTimeLoad] = useState<boolean>(false);

  useEffect(() => {
    const initialCards = cards
      .filter(
        (card) => card.name !== 'Barbarian Launcher'
          && card.name !== 'Super Mini P.E.K.K.A',
      )
      .filter((card) => card.name.toLowerCase().startsWith(searchName!.toLowerCase()))
      .sort(cardSort);

    const newCards = cards
      .filter(
        (card) => card.name !== 'Barbarian Launcher'
          && card.name !== 'Super Mini P.E.K.K.A',
      )
      .filter((card) => card.name.toLowerCase().startsWith(searchName!.toLowerCase()))
      .filter((card) => rarityNumber > 0 && card.maxLevel === rarityNumber)
      .sort(cardSort);

    if (rarityNumber === 0) {
      setAllCards(initialCards);
    } else {
      setAllCards(newCards);
    }
  }, [searchName, rarityNumber]);

  const setTimeLoadPage = () => {
    setTimeout(() => {
      setTimeLoad(true);
    }, 7000);
  };

  setTimeLoadPage();

  return (
    <SMain>
      <Components.Header active={ active } setActive={ setActive } />

      {active && (
        <Components.FilterCard
          searchName={ searchName }
          setSearchName={ setSearchName }
          rarityNumber={ rarityNumber }
          setRarityNumber={ setRarityNumber }
        />
      )}

      {timeLoad
        ? (
          <article>
            {allCards.map(({ id, name, iconUrls }) => (
              <a
                key={ id }
                href={ `https://royaleapi.com/card/${nameCardLink(name)}` }
                aria-label={ name }
              >
                <img
                  src={ iconUrls.medium }
                  alt={ name }
                />
              </a>
            ))}
          </article>
        ) : (
          <Components.Loading />
        )}

      <Components.Footer />
    </SMain>
  );
};

export default Home;
