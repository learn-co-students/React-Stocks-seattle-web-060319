import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks'

class App extends Component {
  constructor() {
    super()
      this.state = {
        allStocks: [],
        changingStocks: [],
        portfolio: [],
        checkedTicker: false,
        checkedPrice: false

      }
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(stockInfo => this.renderStockData(stockInfo))
  }

  renderStockData = (stockInfo) => {
    this.setState({
      allStocks: stockInfo,
      changingStocks: [...stockInfo]
    })
  }

  handleClick = (stock) => {
    if (this.state.portfolio.includes(stock)){
      let newPortfolio = this.state.portfolio.filter(deleteStock => deleteStock.id !== stock.id)
      this.setState({
        portfolio: newPortfolio
      })
    } else {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }

  }

  filterByTicker = () => {
    let stocks = this.state.allStocks
    let sorted = stocks.sort(this.compareTicker)
    this.setState({
      allStocks: sorted,
      checkedTicker: !this.state.checkedTicker
    })
  }

  filterByPrice = () => {
    let stocks = this.state.allStocks
    let sorted = stocks.sort(this.comparePrice)
    this.setState({
      allStocks: sorted,
      checkedPrice: !this.state.checkedPrice
    })
  }

  compareTicker = (stockA, stockB) => {
    let a = stockA.ticker
    let b = stockB.ticker
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  }

  comparePrice = (stockA, stockB) => {
    let a = stockA.price
    let b = stockB.price
      return a-b
  }

  filterByType = (e) => {
    this.setState({
      allStocks: [...this.state.changingStocks]
    })
    let typeChange = e.target.value
    let stocks = this.state.changingStocks
    let filteredStocks = stocks.filter(stock => stock.type === typeChange)
    this.setState({
      allStocks: filteredStocks
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer filterByType={this.filterByType} filterByPrice={this.filterByPrice}  filterByTicker={this.filterByTicker} checkedTicker={this.checkedTicker} checkedPrice={this.checkedPrice} portfolio={this.state.portfolio} OnClick={this.handleClick} allStocks = {this.state.allStocks}/>
      </div>
    );
  }
}

export default App;
