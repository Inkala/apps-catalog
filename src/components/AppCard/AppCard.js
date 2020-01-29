import React from 'react';
import PropTypes from 'prop-types';

import classes from './AppCard.module.scss';

const AppCard = props => {
  console.log(props.app);

  const { app, order } = props;
  return (
    <article className={classes.appCard}>
      <h2 className={classes.cardTitle}>{`${order} - ${app.name}`}</h2>
      <ul className={classes.stats}>
        <li>
          <span className={classes.title}>Version:</span> {app.version}
        </li>
        <li>
          <span className={classes.title}>Apdex:</span> {app.apdex}
        </li>
      </ul>
      <ul className={classes.host}>
        <li>
          <span className={classes.title}>Host:</span>
        </li>
        {app.host.map(name => (
          <li>{name.match(/(?<=\.)(.*?)(?=\.)/g)[0]}</li>
        ))}
      </ul>
      <ul className={classes.contributors}>
        <li>
          <span className={classes.title}>Contributors:</span>
        </li>
        {app.contributors.map(contributor => (
          <li>{contributor}</li>
        ))}
      </ul>
    </article>
  );
};

AppCard.propTypes = {
  app: PropTypes.object
};

export default AppCard;
