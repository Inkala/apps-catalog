import React from 'react';
import shortid from "shortid";

import classes from './HostCard.module.scss';

const HostCard = props => {
  const { appList } = props;
  const hostsName = appList.host.match(/(?<=\.)(.*?)(?=\.)/g)[0];
  const appsToDisplay = appList.apps.slice(0,5)
  return (
    <article className={classes.hostCard}>
      <h2>{hostsName}</h2>
      <ul>
      {appsToDisplay.map(app=><li key={shortid.generate()}>{app.name}</li>)}
      </ul>
    </article>
  );
};

export default HostCard;
