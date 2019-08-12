import React from 'react';

const SearchBar = ({filterByType, sortByTicker, sortByPrice, checkedPrice, checkedTicker}) => {


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checkedTicker} onClick={sortByTicker}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checkedPrice} onClick={sortByPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterByType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
