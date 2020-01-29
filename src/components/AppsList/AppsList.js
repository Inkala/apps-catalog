import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';

import * as actions from '../../store/actions/actions';
import AppCard from '../AppCard/AppCard';
import classes from './AppsList.module.scss';

class AppsList extends Component {
  componentDidMount() {
    const hostName = this.props.match.params.name;
    this.props.onGetTopAppsByHost(hostName);
  }

  render() {
    const { topAppsByHost } = this.props;
    const hostName = this.props.match.params.name;
    return (
      <section className={classes.appsList}>
        <h2 className={classes.title}>{hostName}</h2>
        {topAppsByHost && topAppsByHost.length
          ? topAppsByHost.map((app, i) => (
              <AppCard key={shortid.generate()} app={app} order={i + 1} />
            ))
          : null}
        <button
          className={classes.backButton}
          onClick={() => this.props.history.goBack()}
        >{`<< Back`}</button>
      </section>
    );
  }
}

AppsList.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppsList));
