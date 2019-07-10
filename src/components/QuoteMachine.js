import React from 'react';
import Button from './Button';

// Parentheses around function body is implicit return
const QuoteMachine = (props) => (
  <>
    {props.isDoneFetching ? `"${props.randomQuote().quote}" –${props.randomQuote().author}` : 'Loading...'}
    <Button
      buttonDisplayName="Next"
      clickHandler={props.nextRandomQuote}
    />
  </>
)

export default QuoteMachine;
