import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => {
            return <Stock stock={stock} onBuyClick={this.props.onBuyClick}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
