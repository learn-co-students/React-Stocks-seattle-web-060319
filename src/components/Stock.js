import React from 'react'

const Stock = (props) => (

  
  <div onClick={props.status === 'add' ? () => props.handleAddClick(props.stock.id) : () => props.handleSellClick(props.stock.id)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
