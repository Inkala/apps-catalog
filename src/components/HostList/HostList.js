import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/actions';
import HostCard from '../HostCard/HostCard';
import classes from './HostList.module.scss';

class HostsList extends Component {
  componentDidMount() {
    this.props.onGetTopAppsByHost();
  }

  render() {
    const { topAppsByHost } = this.props;
    return (
      <section className={classes.hostsList}>
        {topAppsByHost
          ? topAppsByHost.map(appsArray => {
              return (
                <Link to={`/hosts/${appsArray.hostName}`} key={appsArray.host}>
                  <HostCard appList={appsArray} />
                </Link>
              );
            })
          : null}
      </section>
    );
  }
}

HostsList.propTypes = {
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
    onGetTopAppsByHost: () => dispatch(actions.getTopAppsByHost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HostsList);
