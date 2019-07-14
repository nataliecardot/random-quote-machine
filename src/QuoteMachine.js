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
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  card: {
    padding: '1rem',
  },
  progress: {
    color: '#9a9a9a',
    marginTop: '10px'
  }
};

// Parentheses around function body is implicit return
const QuoteMachine = (props) => (
  // It's not this.props.classes because this is a functional component and therefore it doesn't have a this instance
  <Card className={props.classes.card}>
    <Typography>
      <CardContent >
        {props.isDoneFetching ?
          (
              <div className="quote-parent" >
                <p className="quote">{props.randomQuote.quote}</p>
                <p className="author" >–{props.randomQuote.author}</p>
              </div>
          ) : (
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CircularProgress
                className={props.classes.progress}
                size={50}
              />
            </div>
          )
          }
      </CardContent>
    </Typography>

    <CardActions>
      <Button
        size="large"
        onClick={props.nextRandomQuote}
      >
        Next
      </Button>

      {props.isDoneFetching ?
        <IconButton
          target="_blank"
          href={`https://twitter.com/intent/tweet?text="${props.randomQuote.quote}"+–${props.randomQuote.author}`}
        >
          <FontAwesomeIcon icon={faTwitter} size="md" />
        </IconButton>
      : null}
    </CardActions>
  </Card>
);

export default withStyles(styles)(QuoteMachine);
