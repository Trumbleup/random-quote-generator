import React, { Component } from 'react';
import QuoteGenerator from './components/QuoteGenerator'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		quote: "",
  		author: ""
  	}
  }
  render() {
    return (
      <div className="App">
        <QuoteGenerator />
      </div>
    );
  }
}


export default App;
