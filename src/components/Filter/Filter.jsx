import React from 'react';
import {FilterWrapper, FilterInput} from './Filter.styled'

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterWrapper>
      Пошук (ім'я)
      <FilterInput type="text" value={filter} onChange={onFilterChange} />
    </FilterWrapper>
  );
};