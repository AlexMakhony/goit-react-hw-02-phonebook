import React from 'react';
import {FilterWrapper, FilterInput} from './Filter.styled'
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterWrapper>
      Пошук (ім'я)
      <FilterInput type="text" value={filter} onChange={onFilterChange} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};