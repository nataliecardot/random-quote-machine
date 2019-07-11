import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './QuoteMachine.css';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {
  card: {
    padding: '1rem',
  },
};

// Parentheses around function body is implicit return
const QuoteMachine = (props) => (
  // It's not this.props.classes because this is a functional component and therefore it doesn't have a this instance
  <Card className={props.classes.card}>
    <CardContent>
      {props.isDoneFetching ?
        (
          <Typography>
            <div className="quote-parent">
              <p className="quote">{props.randomQuote().quote}</p>
              <p className="author">–{props.randomQuote().author}</p>
            </div>
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

      <IconButton>
        <FontAwesomeIcon icon={faTwitter} size="md">

        </FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default withStyles(styles)(QuoteMachine);
