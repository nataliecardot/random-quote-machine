import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  nextQuoteClickHandler() {
    console.log('Hello');
  }

  render() {
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
