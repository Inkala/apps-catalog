import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/actions';
import classes from './ViewChanger.module.scss';

const ViewChanger = ({ viewStyle, onChangeViewStyle }) => {
  return (
    <section className={classes.viewChanger}>
      <button
        className={viewStyle === 'grid' ? classes.selected : null}
        onClick={() => onChangeViewStyle('grid')}
      >
        <FontAwesomeIcon icon={faTh} />
      </button>
      <button
        className={viewStyle === 'list' ? classes.selected : null}
        onClick={() => onChangeViewStyle('list')}
      >
        <FontAwesomeIcon icon={faThList} />
      </button>
    </section>
  );
};

ViewChanger.propTypes = {
  viewStyle: PropTypes.string,
  onChangeViewStyle: PropTypes.func
};

const mapStateToProps = state => {
  return {
    viewStyle: state.viewStyle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeViewStyle: style => dispatch(actions.changeViewStyle(style))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewChanger);
