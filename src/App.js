import React, { Component } from 'react';
import './App.css';
import { random } from 'lodash';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuoteIndex: null
    }
    this.randomQuoteIndex = this.randomQuoteIndex.bind(this);
  }

  componentDidMount() {
    // fetch method uses GET method by default; don't need to specify
    fetch('https://gist.githubusercontent.com/nataliecardot/0ca0878d2f0c4210e2ed87a5f6947ec7/raw/1802a693d02ea086817e46a42413c0df4c077e3b/quotes.json')
      // Takes a JSON response string and parses it into JS object
      .then(response => response.json())
      // state is set to quotes: quotes due to destructuring
      .then(quotes => this.setState({ quotes }, () => {
        this.setState({ randomQuoteIndex: this.randomQuoteIndex() })
      }));
  }

  randomQuoteIndex() {
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button
          buttonDisplayName="Next"
          clickHandler={this.randomQuoteIndex}
        />
      </div>
    );
  }
}

export default App;
