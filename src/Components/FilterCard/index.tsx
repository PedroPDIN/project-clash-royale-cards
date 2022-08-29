import React from 'react';

import SFilter from './styled';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const FilterCard = ({ search, setSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputSearch = e.target.value;
    setSearch(InputSearch);
  };

  return (
    <SFilter>
      <input
        type="text"
        placeholder="nome"
        value={ search }
        onChange={ handleChange }
      />
      <select name="" id="">
        <option value="all">Todos</option>
        <option value="common">Comum</option>
        <option value="rare">Rara</option>
        <option value="epic">Épica</option>
        <option value="legendary">Lendária</option>
        <option value="champions">Campeões</option>
      </select>
    </SFilter>
  );
};

export default FilterCard;
