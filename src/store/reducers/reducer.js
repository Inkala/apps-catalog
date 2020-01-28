import * as actionTypes from '../actions/actionTypes';
import appsData from '../../helpers/host-app-data.json';

const initialState = {
  topAppsByHost: {},
  hostsList: [],
  isVisible: false,
  viewStyle: 'grid'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_APPS_BY_HOST:
      const appList = {};
      appsData.map(app =>
        app.host.map(hostName => {
          // Copy to  prevent data mutation
          const appCopy = { ...app };
          appCopy.contributors = [...appCopy.contributors];
          appCopy.host = [...appCopy.host];
          if (appList[hostName]) {
            return appList[hostName].push(appCopy);
          } else {
            return (appList[hostName] = [appCopy]);
          }
        })
      );
      for (let host in appList) {
        appList[host] = [...appList[host]]
          .sort((a, b) => b.apdex - a.apdex)
          .slice(0, 25);
      }
      return {
        ...state,
        topAppsByHost: appList,
        hostsList: Object.keys(appList)
      };
    default:
      return state;
  }
};

export default reducer;
