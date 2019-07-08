import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
  }

  componentDidMount() {
    // fetch method uses GET method by default; don't need to specify
    fetch('https://gist.githubusercontent.com/christianvuerings/6624542/raw/379a1943f1881b3d3d4ca3e3f456df4d4608c9e7/quotes.json')
      // Takes a JSON response string and parses it into JS object
      .then(response => response.json())
      .then(quotes => this.setState({ quotes }));
  }

  nextQuoteClickHandler() {
    console.log('Hello');
  }

  render() {
    console.log(this.state.quotes)
    return (
      <div className="App" id="quote-box">
        <Button
          buttonDisplayName="Next"
          clickHandler={this.nextQuoteClickHandler}
        />
      </div>
    );
  }
}

export default App;
