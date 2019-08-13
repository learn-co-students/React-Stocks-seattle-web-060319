import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filterByType={this.props.filterByType} filterByPrice={this.props.filterByPrice}  filterByTicker={this.props.filterByTicker} checkedTicker={this.props.checkedTicker} checkedPrice={this.props.checkedPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer OnClick={this.props.handleClick} allStocks = {this.props.allStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer OnClick={this.props.handleClick} portfolio={this.props.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
