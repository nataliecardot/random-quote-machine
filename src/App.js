import React, { Component } from 'react';
import QuoteMachine from './QuoteMachine';
import { random } from 'lodash';
import 'typeface-roboto'; // From Material-UI
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from './dawn.jpg';

const styles = {
  // container is root component (set in Grid component instance)
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    background: `url(${backgroundImage}) center`,
    backgroundSize: 'cover', // Using this in background causes issues
  }
};

class App extends Component {
  constructor(props) {
    // Passing props to super only needed then you want to access this.props in constructor
    super();
    this.state = {
      quotes: [],
      randomQuoteIndex: null,
      isDoneFetching: false
    }
    this.nextRandomQuote = this.nextRandomQuote.bind(this);
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

  // Returns integer representing index in quotes state. Having quotes as argument rather than referencing this.states.quote is needed for setState in componentDidMount. Otherwise, randomQuoteIndex is called before quotes state is set, meaning state would have to be set in setState callback after first setState for quotes set
  generateRandomQuoteIndex(quotes) {
    return random(0, quotes.length - 1);
  }

  // Sets state with results of calling generateRandomQuoteIndex again to generate new random index based on quotes state (array of objects). Used only when "next" button is clicked to display new quote. Triggers new render since random index state changes; quote displayed by randomQuote() call in render() changes
  nextRandomQuote() {
    this.setState({
      // This causes randomQuoteIndex state to change (since it uses randomQuoteIndex), triggering rerender
      randomQuoteIndex: this.generateRandomQuoteIndex(this.state.quotes)
    });
  }

  render() {
    return (
      <Grid
        id="quote-box"
        className={this.props.classes.container}
        justify="center"
        container
      >
        <Grid xs={10} sm={9} md={8} lg={7} xl={6} item>
          <QuoteMachine
            isDoneFetching={this.state.isDoneFetching}
            randomQuote={this.randomQuote()}
            nextRandomQuote={this.nextRandomQuote}
          />
        </Grid>
      </Grid>
    );
  }
}

// Passing styles into withStyles function returns a higher order component in which App component can be passed so that classes prop imports styles
export default withStyles(styles)(App);
