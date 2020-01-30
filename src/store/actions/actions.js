import * as actionTypes from './actionTypes';

export const getAllTopApps = () => {
  return { type: actionTypes.GET_ALL_TOP_APPS };
};

export const getTopAppsByHost = hostName => {
  return {
    type: actionTypes.GET_TOP_APPS_BY_HOST,
    hostName
  };
};

export const changeViewStyle = style => {
  return {
    type: actionTypes.CHANGE_VIEW_STYLE,
    style
  };
};

export const addAppToHost = (app, hostName) => {
  return {
    type: actionTypes.ADD_APP_TO_HOST
  };
};

export const removeAppFromHost = (app, hostName) => {
  return {
    type: actionTypes.REMOVE_APP_FROM_HOST,
    app,
    hostName
  };
};
