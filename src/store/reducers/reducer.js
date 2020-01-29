import * as actionTypes from '../actions/actionTypes';
import appsData from '../../helpers/host-app-data.json';

const initialState = {
  topAppsByHost: [],
  hostsList: [],
  isVisible: false,
  viewStyle: 'grid'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_APPS_BY_HOST:
      const allAppsObj = {};
      const appList = [];
      appsData.map(app =>
        app.host.map(hostName => {
          // Copy to  prevent data mutation
          const appCopy = { ...app };
          appCopy.contributors = [...appCopy.contributors];
          appCopy.host = [...appCopy.host];
          if (allAppsObj[hostName]) {
            return allAppsObj[hostName].push(appCopy);
          } else {
            return (allAppsObj[hostName] = [appCopy]);
          }
        })
      );
      for (let host in allAppsObj) {
        // Format name for titles and urls
        const hostName = host.match(/(?<=\.)(.*?)(?=\.)/g)[0];
        allAppsObj[host] = [...allAppsObj[host]]
          .sort((a, b) => b.apdex - a.apdex)
          .slice(0, 25);
          appList.push({
            host,
            hostName,
            apps: allAppsObj[host],
          })
      }
      return {
        ...state,
        topAppsByHost: appList,
      };
    default:
      return state;
  }
};

export default reducer;
