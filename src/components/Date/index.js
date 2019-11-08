import React, { useState } from 'react';

export default function Date({ data }) {
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange}>
        <option value='2019-11-07'>2019-11-07</option>
        <option value='2019-11-06'>2019-11-06</option>
        <option value='2019-11-05'>2019-11-05</option>
        <option value='2019-11-04'>2019-11-04</option>
        <option value='2019-11-03'>2019-11-03</option>
      </select>
    </form>
  );
}
