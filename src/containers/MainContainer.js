import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filterByType = {this.props.filterByType} checkedPrice = {this.props.checkedPrice} checkedTicker = {this.props.checkedTicker} sortByPrice = {this.props.sortByPrice} sortByTicker = {this.props.sortByTicker}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick = {this.props.handleClick} allStocks = {this.props.allStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio = {this.props.portfolio} handleClick = {this.props.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
