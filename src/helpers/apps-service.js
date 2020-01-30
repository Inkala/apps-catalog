import appsData from './host-app-data.json';

const groupAppsByHost = () => {
  const allAppsObj = {};
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
  return sortApps(allAppsObj[hostName]).slice(0, 25)
};

export const addAppToHost = (app, hostName) => {
  
}

export const removeAppFromHost = (app, hostName) => {
  const index = allAppsObj[hostName].indexOf(app);
  allAppsObj[hostName].splice(index, 1);
  return getTopAppsByHost(hostName);
}