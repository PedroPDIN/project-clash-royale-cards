import React from 'react';

import SFilter from './styled';

const FilterCard = () => (
  <SFilter>
    <input
      type="text"
      placeholder="nome"
    />
    <select name="" id="">
      <option value="all">Todos</option>
      <option value="common">Comum</option>
      <option value="rare">Rara</option>
      <option value="epic">Épico</option>
      <option value="legendary">Lendário</option>
    </select>
  </SFilter>
);

export default FilterCard;
