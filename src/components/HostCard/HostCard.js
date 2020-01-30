import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import classes from './HostCard.module.scss';

const HostCard = props => {
  const { appList, host } = props;
  const hostName = host.match(/(?<=\.)(.*?)(?=\.)/g)[0];
  return (
    <article className={classes.hostCard}>
      <h2>{hostName}</h2>
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
