import React from 'react';
import Button from './Button';
import Typography from '@material-ui/core/Typography';

// Parentheses around function body is implicit return
const QuoteMachine = (props) => (
  <>
    {props.isDoneFetching ?
      (
        <Typography>
          {props.randomQuote().quote} –{props.randomQuote().author}
        </Typography>
      ) : 'Loading...'}

    <Button
      buttonDisplayName="Next"
      clickHandler={props.nextRandomQuote}
    />
  </>
)

export default QuoteMachine;
