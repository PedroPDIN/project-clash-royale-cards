import React from 'react';

import SFilter from './styled';

interface Props {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>
  rarityNumber: number;
  setRarityNumber: React.Dispatch<React.SetStateAction<number>>
}

type rarities = { id: number; name: string, maxLevel: number };

const FilterCard = ({
  searchName,
  setSearchName,
  rarityNumber,
  setRarityNumber,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value;
    setSearchName(inputSearch);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectSearch = +e.target.value;
    if (typeof +selectSearch === 'number') {
      setRarityNumber(selectSearch);
    } else {
      // eslint-disable-next-line no-alert
      alert('Problemas internas ao realizar a busca por raridade');
    }
  };

  const allRarities: rarities[] = [
    { id: 1, name: 'Todos', maxLevel: 0 },
    { id: 2, name: 'Comum', maxLevel: 14 },
    { id: 3, name: 'Rara', maxLevel: 12 },
    { id: 4, name: 'Épica', maxLevel: 9 },
    { id: 5, name: 'Lendária', maxLevel: 6 },
    { id: 6, name: 'Campeões', maxLevel: 4 },
  ];

  return (
    <SFilter>
      <input
        type="text"
        placeholder="nome"
        value={ searchName }
        onChange={ handleChange }
      />
      <select value={ rarityNumber } onChange={ handleSelect }>
        {allRarities.map(({ id, name, maxLevel }) => (
          <option key={ id } value={ maxLevel }>{ name }</option>
        ))}
      </select>
    </SFilter>
  );
};

export default FilterCard;
