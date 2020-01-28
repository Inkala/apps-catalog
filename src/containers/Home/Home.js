import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';

export class Home extends Component {

  componentDidMount() {
    this.props.onGetTopAppsByHost();
  }

  render() {
    console.log("Home:", this.props);
    
    return (
      <div>
        
      </div>
    )
  }
}

Home.propTypes = {
  topAppsByHost: PropTypes.object,
  hostsList: PropTypes.array,
  onGetTopAppsByHost: PropTypes.func
};

const mapStateToProps = state => {
  return {
    topAppsByHost: state.topAppsByHost,
    hostsList: state.hostsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTopAppsByHost: () => dispatch(actions.getTopAppsByHost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
