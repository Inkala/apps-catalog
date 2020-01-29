import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';
import classes from './HostCard.module.scss';

const HostCard = props => {
  const { appList, host } = props;
  return (
    <article className={classes.hostCard}>
      <h2>{host}</h2>
      <ul>
        {appList.map(app => (
          <li key={shortid.generate()}>{app.name}</li>
        ))}
      </ul>
    </article>
  );
};

HostCard.propTypes = {
  topAppsByHost: PropTypes.array,
  onGetTopAppsByHost: PropTypes.func
};

const mapStateToProps = state => {
  return {
    topAppsByHost: state.topAppsByHost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTopAppsByHost: hostName => dispatch(actions.getTopAppsByHost(hostName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HostCard);
