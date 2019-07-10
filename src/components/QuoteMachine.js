import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Parentheses around function body is implicit return
const QuoteMachine = (props) => (
  <Card>
    <CardContent>
      {props.isDoneFetching ?
        (
          <Typography>
            {props.randomQuote().quote} –{props.randomQuote().author}
          </Typography>
        ) : 'Loading...'}
    </CardContent>

    <CardActions>
      <Button
        size="large"
        onClick={props.nextRandomQuote}
      >
        Next
      </Button>
    </CardActions>
  </Card>
)

export default QuoteMachine;
