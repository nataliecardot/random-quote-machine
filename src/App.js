import React, { useState, useEffect } from 'react';
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
    overflow: 'hidden',
  }
};

function App({ classes }) {

  const [quotes, setQuotes] = useState([]);
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(null);
  const [isDoneFetching, setIsDoneFetching] = useState(false);

  // Refer to https://www.robinwieruch.de/react-hooks-fetch-data/ for use of async and await in useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://gist.githubusercontent.com/nataliecardot/0ca0878d2f0c4210e2ed87a5f6947ec7/raw/3b071344ee593408b20d5895c014fea7dbd94236/quotes.json');
      // Takes a JSON response string and parses it into JS object
      const quotes = await data.json();
      setQuotes(quotes);
      setRandomQuoteIndex(generateRandomQuoteIndex(quotes));
      setIsDoneFetching(true);
    };
    fetchData();
  }, []); // Empty array makes it run once, avoiding unnecessary rerenders. Note useEffect is similar to componentDidMount and componentDidUpdate

  // Returns object with quote and author properties from quote state (fetched array of objects) at random index returned by generateRandomQuoteIndex method
  function randomQuote() {
    return quotes[randomQuoteIndex];
  }

  // Returns integer representing index in quotes state. Having quotes as argument rather than referencing this.states.quote is needed for setState in componentDidMount. Otherwise, randomQuoteIndex is called before quotes state is set, meaning state would have to be set in setState callback after first setState for quotes set
  function generateRandomQuoteIndex(quotes) {
    return random(0, quotes.length - 1);
  }

  // Sets state with results of calling generateRandomQuoteIndex again to generate new random index based on quotes state (array of objects). Used only when "next" button is clicked to display new quote. Triggers new render since random index state changes; quote displayed by randomQuote() call in render() changes
  function nextRandomQuote() {
    // This causes randomQuoteIndex state to change (since it uses randomQuoteIndex), triggering rerender
    setRandomQuoteIndex(generateRandomQuoteIndex(quotes));
  }

  return (
    <Grid
      className={classes.container}
      justify="center"
      container
    >
      <Grid xs={10} sm={9} md={8} lg={7} xl={6} item>
        <QuoteMachine
          isDoneFetching={isDoneFetching}
          randomQuote={randomQuote()}
          nextRandomQuote={nextRandomQuote}
        />
      </Grid>
    </Grid>
  );
}

// Passing styles into withStyles function returns a higher order component in which App component can be passed so that classes prop imports styles
export default withStyles(styles)(App);
