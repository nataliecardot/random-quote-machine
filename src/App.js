import React, { Component } from 'react';
import './App.css';
import { random } from 'lodash';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuoteIndex: null,
      isDoneFetching: false
    }
    this.newRandomQuote = this.newRandomQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/nataliecardot/0ca0878d2f0c4210e2ed87a5f6947ec7/raw/1802a693d02ea086817e46a42413c0df4c077e3b/quotes.json')
      // Takes a JSON response string and parses it into JS object
      .then(response => response.json())
      // state is set to quotes: quotes due to destructuring
      .then(quotes => this.setState({
          quotes,
          randomQuoteIndex: this.generateRandomQuoteIndex(quotes),
          isDoneFetching: true
        }));
  }

  // Returns object with quote and author properties from quote state (fetched array of objects) at random index returned by generateRandomQuoteIndex method
  randomQuote() {
    return this.state.quotes[this.state.randomQuoteIndex];
  }

  // Returns integer representing index in quotes state. Having quotes as argument rather than referencing this.states.quote is needed for setState in componentDidMount. Otherwise, randomQuoteIndex is called before quotes state is set, meaning state would have to be set in setState callback after first setState for quotes set. See https://bit.ly/30ki9w0
  generateRandomQuoteIndex(quotes) {
    return random(0, quotes.length - 1);
  }

  // Sets state with results of calling generateRandomQuoteIndex again to generate new random index based on quotes state (array of objects). Used only when "next" button is clicked to display new quote. Triggers new render since random index state changes; quote displayed by randomQuote() call in render() changes 
  newRandomQuote() {
    this.setState({
      // This causes randomQuoteIndex state to change (since it uses randomQuoteIndex), triggering rerender
      randomQuoteIndex: this.generateRandomQuoteIndex(this.state.quotes)
    });
  }

  render() {
    return (
      <div className="App" id="quote-box">
        {this.state.isDoneFetching ? `"${this.randomQuote().quote}" –${this.randomQuote().author}` : 'Loading...'}
        <Button
          buttonDisplayName="Next"
          clickHandler={this.newRandomQuote}
        />
      </div>
    );
  }
}

export default App;
