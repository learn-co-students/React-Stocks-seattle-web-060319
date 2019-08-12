import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stockArr: [],
      myStocks: [],
      filteredArr: [],
      checked: 0
    }
  }

   componentDidMount = () => {
    fetch('http://localhost:3000/stocks').then(res => res.json()).then(data =>
      { console.log(data)
      this.setState({
      stockArr: [...data],
      filteredArr: [...data]
        })
      })
    }

    handleBuy = (stock) => {
      if(this.state.myStocks.includes(stock)) {
        return;
      }
      this.setState({
        myStocks: [...this.state.myStocks, stock]
      })
    }

    handleSell = (stock) => {
      let targetStock = this.state.myStocks.find(myStock => myStock.id === stock.id)
      let newState = this.state.myStocks.filter(myStock => myStock !== targetStock)
      this.setState({
        myStocks: newState
      })
    }

    handleSort = (e) => {
      if(e.target.value === "Alphabetically") {
        this.setState({
          checked: 1
        })
        this.sortByAlpha();
      } else if(e.target.value === "Price") {
        this.setState({
          checked: 2
        })
        this.sortByPrice();
      }
    }

    handleFilter = (e) => {
      if(e.target.value === "") {
        this.setState({
          filteredArr: this.state.stockArr,
          checked: 0
        })
      } else {
        let filtered = this.state.stockArr.filter(stock => stock.type === e.target.value)
        this.setState({
          filteredArr: filtered,
          checked: 0
        })
      }
    }

    sortByPrice = () => {
      let sorted = this.state.filteredArr.sort((ele1, ele2) => {
        return ele1.price - ele2.price
      })
      this.setState({
        filteredArr: sorted
      })
    }

    sortByAlpha = () => {
      let sorted = this.state.filteredArr.sort((ele1, ele2) => {
        if(ele1.ticker > ele2.ticker) {
          return 1
        } else if(ele2.ticker > ele1.ticker) {
          return -1
        } else {
          return 0
        }
      })
      this.setState({
        filteredArr: sorted
      })
    }

  render() {
    console.log(this.state.myStocks)
    return (
      <div>
        <SearchBar onSort={this.handleSort} onFilter={this.handleFilter} checked={this.state.checked}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredArr} onBuyClick={this.handleBuy} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} onSellClick={this.handleSell} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
