import React, {Component} from 'react';

class QuoteGenerator extends Component {
  constructor() {
  	super();
  	this.state = {
  		quote: "",
  		author: ""
  	}

  	this.newQuote = this.newQuote.bind(this);

  }

  newQuote() {
  	let i = Math.floor(Math.random()*100);
  	fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  	.then( response => response.json())
  	.then( data => this.setState({
  		quote: data.quotes[i].quote,
  		author: data.quotes[i].author
  	}, function(){console.log(this.state.quote)}))
  }

  componentDidMount() {
  	this.newQuote();
  }

  render() {
  	const { quote, author } = this.state;
    const url = `https://twitter.com/intent/tweet?text=${quote}  -${author}`; 
    return (
      <div id="quoteGenerator" className="">
        <div id="quoteProps">
          <p>{quote}</p>
          <p>-{author}</p>
        </div>
      	<div id="buttons">
          <a href={url} target='_blank'><i class="fab fa-twitter blue"></i></a>
          <button onClick={this.newQuote}>New Quote</button> 
        </div>
      </div>
    );
  }
};

export default QuoteGenerator