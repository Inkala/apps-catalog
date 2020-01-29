import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import classes from './HostCard.module.scss';

const HostCard = props => {
  const { appList, host } = props;
  return (
    <article className={classes.hostCard}>
      <h2>{host}</h2>
      <ul>
        {appList.map((app, i) => (
          <li key={shortid.generate()}><span>{`${i + 1} - `}</span>{app.name}</li>
        ))}
      </ul>
    </article>
  );
};

HostCard.propTypes = {
  appList: PropTypes.array,
  host: PropTypes.string
};

export default HostCard;
