import * as actionTypes from '../actions/actionTypes';
import { cloneAppsObject, cloneAppsArray } from '../../helpers/deep-cloner';
import {
  getAllTopApps,
  getTopAppsByHost,
  addAppToHost,
  removeAppFromHost,
  hostsList
} from '../../helpers/apps-service';

const initialState = {
  allTopApps: {},
  topAppsByHost: [],
  hostsList,
  isVisible: false,
  viewStyle: 'grid'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TOP_APPS:
      const allApps = cloneAppsObject(getAllTopApps());
      return {
        ...state,
        allTopApps: allApps
      };
    case actionTypes.GET_TOP_APPS_BY_HOST:
      const appsByHost = cloneAppsArray(getTopAppsByHost(action.hostName));
      return {
        ...state,
        topAppsByHost: appsByHost
      };
    case actionTypes.ADD_APP_TO_HOST:
      const addedApp = cloneAppsArray(
        addAppToHost(action.app, action.newHost, action.currentHost)
      );
      return {
        ...state,
        topAppsByHost: addedApp
      };
    case actionTypes.REMOVE_APP_FROM_HOST:
      const removedApp = cloneAppsArray(
        removeAppFromHost(action.app, action.hostName)
      );
      return {
        ...state,
        topAppsByHost: removedApp
      };
    case actionTypes.CHANGE_VIEW_STYLE:
      return {
        ...state,
        viewStyle: action.style === 'grid' ? 'grid' : 'list'
      };
    default:
      return state;
  }
};

export default reducer;
