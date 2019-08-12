import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const API = `http://localhost:3000/stocks`

class App extends Component {
  constructor(){
    super()
    this.state = {
      allofTheStocks: [],
      allStocks: [],
      portfolio: [],
      checkedTicker: false,
      checkedPrice: false
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(stockData => this.renderStocks(stockData))
  }

  renderStocks = (stockData) => {
    this.setState({
      allStocks: stockData,
      allofTheStocks:[...stockData]
    })
  }

  handleClick = (stock) => {

    if (this.state.portfolio.includes(stock)){
      console.log(stock)
      let newPortfolio = this.state.portfolio.filter(item => item.id!==stock.id )

      this.setState({
        portfolio: newPortfolio
      })
    }
    else {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      }, ()=>{console.log(this.state.portfolio)})
    }

  }

  sortByTicker = () => {
    let stocks = this.state.allStocks
    let sortedStocks = stocks.sort(this.compare)
    console.log(sortedStocks)
    this.setState({
      allStocks: sortedStocks,
      checkedTicker: !this.state.checkedTicker
    })
  }

  sortByPrice = () => {
    let stocks = this.state.allStocks
    let sortedStocks = stocks.sort(this.comparePrice)
    console.log(sortedStocks)
    this.setState({
      allStocks: sortedStocks,
      checkedPrice: !this.state.checkedPrice
    })
  }

  comparePrice = (stockA, stockB) => {
    const a = stockA.price
    const b = stockB.price
    return a-b
  }
  compare = (stockA, stockB) => {
    const a = stockA.ticker
    const b = stockB.ticker
    if (a < b ) {
      return -1
    }
    else if (a > b) {
      return 1
    }
    else {
      return 0
    }
  }

  filterByType = (ev) =>{
    this.setState({
      allStocks: [...this.state.allStocks]
    })
    let stockType = ev.target.value //sets stock type
    let stocks = this.state.allofTheStocks
    let filteredStocks = stocks.filter(stock => stock.type === stockType)
    this.setState({
      allStocks: filteredStocks
    })
  }




  render() {
    return (
      <div>
        <Header/>
        <MainContainer filterByType = {this.filterByType} checkedPrice = {this.state.checkedPrice} checkedTicker = {this.state.checkedTicker} sortByPrice = {this.sortByPrice} sortByTicker = {this.sortByTicker} portfolio = {this.state.portfolio} handleClick = {this.handleClick} allStocks = {this.state.allStocks}/>
      </div>
    );
  }
}

export default App;
