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
    this.newRandomQuoteIndex = this.newRandomQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/nataliecardot/0ca0878d2f0c4210e2ed87a5f6947ec7/raw/1802a693d02ea086817e46a42413c0df4c077e3b/quotes.json')
      // Takes a JSON response string and parses it into JS object
      .then(response => response.json())
      // state is set to quotes: quotes due to destructuring
      // Using setState callback since setState is asynchronous and need to make sure quotes is loaded before setting the randomQuoteIndex state since it depends on it
      .then(quotes => this.setState({
          quotes,
          randomQuoteIndex: this.randomQuoteIndex(quotes),
          isDoneFetching: true
        }));
  }

  randomQuote() {
    return this.state.quotes[this.state.randomQuoteIndex];
  }

  // Having quotes as argument rather than referencing this.states.quote is needed for setState in componentDidMount. Otherwise, randomQuoteIndex is called before quotes state is set, meaning state would have to be set in setState callback after first setState for quotes set. See https://bit.ly/30ki9w0
  randomQuoteIndex(quotes) {
    return random(0, quotes.length - 1);
  }

  newRandomQuoteIndex() {
    this.setState({
      // This causes randomQuoteIndex state to change (since it uses randomQuoteIndex), triggering rerender
      randomQuoteIndex: this.randomQuoteIndex(this.state.quotes)
    });
  }

  render() {
    return (
      <div className="App" id="quote-box">
        {this.state.isDoneFetching ? `"${this.randomQuote().quote}" –${this.randomQuote().author}` : 'Loading...'}
        <Button
          buttonDisplayName="Next"
          clickHandler={this.newRandomQuoteIndex}
        />
      </div>
    );
  }
}

export default App;
