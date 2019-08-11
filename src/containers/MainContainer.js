import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = 'http://localhost:3000/stocks'
class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      backUp: [],
      stocks: [],
      myStocks: [],
      nameChecked: false,
      priceChecked: false
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          stocks: data,
          backUp: [...data]
        });
      });
  };

  handleAddClick = id => {
    const addStock = this.state.stocks.filter(stock => stock.id === id)[0];
    this.setState({
      myStocks: [...this.state.myStocks, addStock]
    });
  };

  handleSellClick = id => {
    const sellStock = this.state.myStocks.filter(stock => stock.id !== id);
    this.setState({
      myStocks: sellStock
    });
  };

  compareName = (A, B) => {
    const a = A.name;
    const b = B.name;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  comparePrice = (A, B) => {
    const a = A.price;
    const b = B.price;
    return a - b
  };

  handleNameChange = () => {
    const newStocks = !this.state.nameChecked
      ? this.state.stocks.sort(this.compareName)
      : this.state.backUp;
    this.setState({
      stocks: newStocks,
      nameChecked: !this.state.nameChecked
    });
  };

  handlePriceChange = () => {
    const newStocks = !this.state.priceChecked
     ? this.state.stocks.sort(this.comparePrice)
     : this.state.backUp;
    this.setState({
      stocks: newStocks,
      priceChecked: !this.state.priceChecked
    });
  };

  handleSearchChange = (e) => {
    const value = e.target.value;
    const newStocks = this.state.backUp.filter(stock => stock.type === value);
    this.setState({
      stocks: newStocks
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          nameChecked={this.state.nameChecked}
          priceChecked={this.state.priceChecked}
          handleNameChange={this.handleNameChange}
          handlePriceChange={this.handlePriceChange}
          handleSearchChange={this.handleSearchChange}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              handleAddClick={this.handleAddClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.state.myStocks}
              handleSellClick={this.handleSellClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
