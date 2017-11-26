import React, { Component } from 'react';

import './App.css';
import QuoteText from './components/QuoteText/QuoteText';
import Background from './components/Background/Background';
import Filters from './components/Filters/Filters';

class App extends Component {

  constructor(){
    super();

    this.toggleFiltersVisibility = this.toggleFiltersVisibility.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
      backgroundImageUrl : '',
      quoteText : '',
      quoteAuthor : '',
      isFiltersHidden : false,
      selectedFilterType : 'filter-type-1'
    }
  }

  getBackgroundFromAPI () {
    fetch('https://api.unsplash.com/photos/random?client_id=c913470e479d4624c597cd30b31168ade9320a99e44f104d030875582939e793')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        backgroundImageUrl : responseJson.urls.regular
      })
    });
  }

  getRandomQuote() {
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',{ 
      method: 'GET',
      headers: {
      'X-Mashape-Key' : 'vFC0YPaH6nmshzzCMH3nJt6ryLiIp1c5vdIjsnSS7UNtP8wUED',
      'X-Mashape-Host' : 'andruxnet-random-famous-quotes.p.mashape.com'
      } 
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        quoteText : responseJson.quote,
        quoteAuthor : responseJson.author
      })
    });
  }

  handleFilterChange(filterType){
    this.setState({
      selectedFilterType : filterType
    })
  }

  toggleFiltersVisibility (){
    this.setState({
      isFiltersHidden : !this.state.isFiltersHidden
    })
  }

  componentDidMount(){
    this.getBackgroundFromAPI();
    this.getRandomQuote();
  }

  render() {
    return (
      <div className="App" onClick={this.toggleFiltersVisibility}>
        <Background selectedFilterType={this.state.selectedFilterType} backgroundImageUrl={this.state.backgroundImageUrl} />
        <QuoteText message={this.state.quoteText} author={this.state.quoteAuthor} />
        <Filters onFilterChange={this.handleFilterChange} selectedFilterType={this.state.selectedFilterType} isHidden={this.state.isFiltersHidden} backgroundImageUrl={this.state.backgroundImageUrl} />
      </div>
    );
  }
}

export default App;
