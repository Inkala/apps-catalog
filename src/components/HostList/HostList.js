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
    const { allTopApps, viewStyle } = this.props;
    console.log(viewStyle);

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
    const viewClass = viewStyle === 'grid' ? classes.grid : classes.list;
    return (
      <section className={`${classes.hostsList} ${viewClass}`}>
        {appsList}
      </section>
    );
  }
}

HostsList.propTypes = {
  allTopApps: PropTypes.object,
  onGetAllTopApps: PropTypes.func,
  viewStyle: PropTypes.string
};

const mapStateToProps = state => {
  return {
    allTopApps: state.allTopApps,
    viewStyle: state.viewStyle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllTopApps: () => dispatch(actions.getAllTopApps())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HostsList);
