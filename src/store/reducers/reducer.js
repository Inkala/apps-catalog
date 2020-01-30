import * as actionTypes from '../actions/actionTypes';
import { getAllTopApps, getTopAppsByHost, addAppToHost, removeAppFromHost } from '../../helpers/apps-service';

const initialState = {
  allTopApps: null,
  topAppsByHost: [],
  isVisible: false,
  viewStyle: 'grid'
};

// Object.keys(allTopApps)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TOP_APPS:
      return {
        ...state,
        allTopApps: getAllTopApps()
      };
    case actionTypes.GET_TOP_APPS_BY_HOST:
      return {
        ...state,
        topAppsByHost: getTopAppsByHost(action.hostName)
      };
    case actionTypes.CHANGE_VIEW_STYLE:
      return {
        ...state,
        viewStyle: action.style === 'grid' ? 'grid' : 'list'
      };
    case actionTypes.ADD_APP_TO_HOST:
      return {
        ...state,
        topAppsByHost: addAppToHost(action.app, action.hostName)
      };
    case actionTypes.REMOVE_APP_FROM_HOST:
      return {
        ...state,
        topAppsByHost: removeAppFromHost(action.app, action.hostName)
      };
    default:
      return state;
  }
};

export default reducer;
