import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';
import Backdrop from '../../ui/Backdrop/Backdrop';
import classes from './AppModal.module.scss';

class AppModal extends PureComponent {
  removeAppHandler = (app, hostName) => {
    this.props.onRemoveAppFromHost(app, hostName);
    this.props.modalClosed();
  };

  render() {
    const { app, hostName, show, modalClosed } = this.props;
    return (
      <React.Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <section
          className={classes.modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          <button className={classes.closeButton} onClick={modalClosed}>
            X
          </button>
          <h2 className={classes.appName}>{app.name}</h2>
          <ul className={classes.stats}>
            <li>
              <span>Version:</span> {app.version}
            </li>
            <li>
              <span>Apdex:</span> {app.apdex}
            </li>
          </ul>
          <ul className={classes.host}>
            <li>
              <span>Host:</span>
            </li>
            {app.host
              ? app.host.map(name => (
                  <li key={name}>{name.match(/(?<=\.)(.*?)(?=\.)/g)[0]}</li>
                ))
              : null}
          </ul>
          <ul className={classes.contributors}>
            <li>
              <span>Contributors:</span>
            </li>
            {app.contributors
              ? app.contributors.map(contributor => (
                  <li key={contributor}>{contributor}</li>
                ))
              : null}
          </ul>
          <div className={classes.actionsButtons}>
            <button className={classes.add}>Add to Host</button>
            <button
              onClick={() => this.removeAppHandler(app, hostName)}
              className={classes.remove}
            >
              Remove from Host
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

AppModal.propTypes = {
  app: PropTypes.object,
  hostName: PropTypes.string,
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  onAddAppToHost: PropTypes.func,
  onRemoveAppFromHost: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAppToHost: (app, hostName) =>
      dispatch(actions.addAppToHost(app, hostName)),
    onRemoveAppFromHost: (app, hostName) =>
      dispatch(actions.removeAppFromHost(app, hostName))
  };
};

export default connect(null, mapDispatchToProps)(AppModal);
