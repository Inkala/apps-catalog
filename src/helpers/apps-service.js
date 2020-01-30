import appsData from './host-app-data.json';

const groupAppsByHost = () => {
  const allAppsObj = {};
  appsData.map(app =>
    app.host.map(hostName => {
      if (allAppsObj[hostName]) {
        return allAppsObj[hostName].push(app);
      } else {
        return (allAppsObj[hostName] = [app]);
      }
    })
  );
  return allAppsObj;
};

// Big opperation. Only done the first time
// Data is available as a global variable
const allAppsObj = groupAppsByHost();

const sortApps = allApps => {
  const sortedApps = allApps.sort((a, b) => b.apdex - a.apdex);
  return sortedApps;
};

export const getAllTopApps = () => {
  const appsList = {};
  for (let host in allAppsObj) {
    appsList[host] = sortApps(allAppsObj[host]).slice(0, 5);
  }
  return appsList;
};

export const getTopAppsByHost = hostName => {
  return sortApps(allAppsObj[hostName]).slice(0, 25);
};

export const addAppToHost = (app, newHost, currentHost) => {
  if (allAppsObj[newHost].indexOf(app) < 0) {
    app.host.push(newHost)
    allAppsObj[newHost].push(app);
  };
  return getTopAppsByHost(currentHost);
};

export const removeAppFromHost = (app, hostName) => {
  const indexInHostArray = app.host.indexOf(hostName);
  app.host.splice(indexInHostArray, 1)
  const indexInAllApps = allAppsObj[hostName].indexOf(app);
  allAppsObj[hostName].splice(indexInAllApps, 1);
  return getTopAppsByHost(hostName);
};

export const hostsList = Object.keys(allAppsObj);
