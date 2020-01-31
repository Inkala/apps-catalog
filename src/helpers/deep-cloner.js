export const cloneAppsObject = appsObject => {
  const newObject = Object.assign({}, appsObject);
  for (let key in newObject) {
    newObject[key] = cloneAppsArray(newObject[key]);
  }
  return newObject;
};

export const cloneAppsArray = appsArray => {
  const newArray = appsArray.map(app => {
    const updatedApp = { ...app };
    updatedApp.contributors = [...updatedApp.contributors];
    updatedApp.host = [...updatedApp.host];
    return updatedApp;
  });
  return newArray;
};
