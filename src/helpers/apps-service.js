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

const sortApps = allApps => {
  const sortedApps = allApps.sort((a, b) => b.apdex - a.apdex);
  return sortedApps;
};

export const getAllTopApps = () => {
  const allApps = groupAppsByHost();
  const appsList = {};
  for (let host in allApps) {
    appsList[host] = sortApps(allApps[host]).slice(0, 5);
  }
  return appsList;
};

export const getTopAppsByHost = hostName => {
  const allApps = groupAppsByHost();
  return sortApps(allApps[hostName]).slice(0, 25);
};

export const addAppToHost = (app, newHost, currentHost) => {
  const foundApp = appsData.find(el => el.name === app.name);
  foundApp.host.push(newHost);
  return getTopAppsByHost(currentHost);
};

export const removeAppFromHost = (app, hostName) => {
  const foundApp = appsData.find(el => el.name === app.name);
  const indexInHostArray = foundApp.host.indexOf(hostName);
  foundApp.host.splice(indexInHostArray, 1);
  return getTopAppsByHost(hostName);
};

export const hostsList = Object.keys(groupAppsByHost());
