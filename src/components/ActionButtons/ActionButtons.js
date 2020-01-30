import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/actions';
import classes from './ActionButtons.module.scss';

class ActionButtons extends Component {
  state = {
    dropdownVisible: false,
    redirect: false
  };

  handleClickHost = (app, newHost, currentHost) => {
    this.props.onAddAppToHost(app, newHost, currentHost);
    this.props.modalClosed();
  };

  handleDropdownToggle = () => {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  };

  render() {
    const { app, hostName, hostsList, remove } = this.props;
    const dropdownClasses = [classes.dropdownWrapper];
    if (this.state.dropdownVisible) {
      dropdownClasses.push(classes.vissible);
    }
    return (
      <section className={classes.actionsButtons}>
        <section className={classes.addSection}>
          <button className={classes.add} onClick={this.handleDropdownToggle}>
            Add to Host
          </button>
          <div className={dropdownClasses.join(' ')}>
            {hostsList.map(newHost => {
              let disabled = true;
              if (app.host.indexOf(newHost) < 0) {
                disabled = false;
              }
              return (
                <button
                  key={newHost}
                  className={classes.dropdown}
                  onClick={() => this.handleClickHost(app, newHost, hostName)}
                  disabled={disabled}
                >
                  {newHost.match(/(?<=\.)(.*?)(?=\.)/g)[0]}
                </button>
              );
            })}
          </div>
        </section>
        <button
          onClick={() => remove(app, hostName)}
          className={classes.remove}
        >
          Remove from Host
        </button>
      </section>
    );
  }
}

ActionButtons.propTypes = {
  app: PropTypes.object,
  hostname: PropTypes.string,
  hostsList: PropTypes.array,
  remove: PropTypes.func,
  onAddAppToHost: PropTypes.func,
  modalClosed: PropTypes.func
};

const mapStateToProps = state => {
  return {
    hostsList: state.hostsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAppToHost: (app, newHost, currentHost) =>
      dispatch(actions.addAppToHost(app, newHost, currentHost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
