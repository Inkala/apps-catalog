import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/actions';
import HostCard from '../HostCard/HostCard';
import classes from './HostList.module.scss';

class HostsList extends Component {

  componentDidMount() {
    this.props.onGetAllTopApps();
  }

  render() {
    const { allTopApps } = this.props;
    let appsList = [];
    if (allTopApps) {
      for (let host in allTopApps) {
        const appCard = (
          <Link to={`/hosts/${host}`} key={host}>
            <HostCard host={host} appList={allTopApps[host].slice(0, 5)} />
          </Link>
        );
        appsList.push(appCard);
      }
    }
    return (
      <section className={classes.hostsList}>
        {appsList}
      </section>
    );
  }
}

HostsList.propTypes = {
  allTopApps: PropTypes.object,
  onGetAllTopApps: PropTypes.func
};

const mapStateToProps = state => {
  return {
    allTopApps: state.allTopApps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllTopApps: () => dispatch(actions.getAllTopApps())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HostsList);
