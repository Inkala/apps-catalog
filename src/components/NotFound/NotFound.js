import React from 'react';
import classes from './NotFound.module.scss';

const NotFound = (props) => {
  return (
    <div className={classes.notFound}>
      <h2>- 404 -</h2>
      <p>Oops... nothing to see here.</p>
      <button
        className={classes.backButton}
        onClick={() => props.history.goBack()}
      >{`<< Back`}</button>
    </div>
  );
};

export default NotFound;
