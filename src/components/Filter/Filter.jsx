import React from 'react';
import css from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input className={css.input}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Make contact"
    />
  </>
);

export default Filter;
