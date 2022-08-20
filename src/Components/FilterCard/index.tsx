import React from 'react';

const FilterCard = () => (
  <div>
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
  </div>
);

export default FilterCard;
