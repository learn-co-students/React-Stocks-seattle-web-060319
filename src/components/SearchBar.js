import React from 'react';

const SearchBar = ({filterByType, filterByPrice, filterByTicker, checkedTicker, checkedPrice}) => {
  console.log(checkedTicker)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={checkedTicker} onClick={filterByTicker}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={checkedPrice} onClick={filterByPrice}/>
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
