import React from 'react';

const SearchBar = (props) => {

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked === 1} onChange={props.onSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.checked === 2} onChange={props.onSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.onFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
