import React from 'react';

const Button = ({ buttonDisplayName, clickHandler }) => (
  <button onClick={clickHandler}>{buttonDisplayName}</button>
);

// This is a presentational component; container component that handles state passes down props to it. Thus, I made it a stateless functional component.

export default Button;
