import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';

import * as actions from '../../store/actions/actions';
import classes from './AppsList.module.scss';
import Modal from '../AppModal/AppModal';

class AppsList extends Component {
  state = {
    modalShow: false,
    appClicked: {}
  };

  componentDidMount() {
    const hostName = this.props.match.params.name;
    this.props.onGetTopAppsByHost(hostName);
  }

  showModalHandler = app => {
    this.setState({ modalShow: true, appClicked: app });
  };

  modalClosedHandler = () => {
    const hostName = this.props.match.params.name;
    this.props.onGetTopAppsByHost(hostName);
    this.setState({ modalShow: false, appClicked: {} });
  };

  render() {
    const { topAppsByHost } = this.props;
    const { modalShow, appClicked } = this.state;
    const host = this.props.match.params.name;
    const hostName = host.match(/(?<=\.)(.*?)(?=\.)/g)[0];
    return (
      <section className={classes.appsList}>
        <Modal
          show={modalShow}
          modalClosed={this.modalClosedHandler}
          hostName={host}
          app={appClicked}
        />
        <h2 className={classes.title}>{hostName}</h2>
        {topAppsByHost && topAppsByHost.length
          ? topAppsByHost.map((app, i) => (
              <button
                key={shortid.generate()}
                className={classes.appCardButton}
                onClick={() => this.showModalHandler(app)}
              >
                <div>
                  <h3 className={classes.cardTitle}>
                    <span>{i + 1} -</span> {app.name}
                  </h3>
                </div>
              </button>
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
