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
        return allAppsObj[hostName] = [appCopy];
      }
    })
  );
  return allAppsObj;
};

const sortApps = allAppsObj => {
  const appList = {};
  for (let host in allAppsObj) {
    // Format name for titles and urls
    const hostName = host.match(/(?<=\.)(.*?)(?=\.)/g)[0];
    const transformedArr = allAppsObj[host]
      .sort((a, b) => b.apdex - a.apdex)
      .slice(0, 25);
    appList[hostName] =  transformedArr;
  }
  return appList;
};

const allAppsObj = groupAppsByHost();

export const allTopApps = sortApps(allAppsObj);
