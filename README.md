## About this test

To see this test working, clone the repository, type `npm install` from the root folder and then type `npm start`.

### The test

The home page shows the best 5 apps per host. When a host card is clicked, the app shows a page with the best 25 apps from that host. And when one of the apps is clicked, a modal appears with all the information about the app and the buttons to remove it from the host or to add it to another host.

The data is not persistent when the browser gets refreshed.

### Technologies used

For this test I chose to use [React](https://reactjs.org/) for it is the JavaScript tool in which I have more knowledge and experience.

I used [Redux](https://redux.js.org/) because having a global state can be really useful when handling data that should be available and modified by more than one component and because I believe it is the tool that is most often used with [React](https://reactjs.org/).

### Success

All the functionalities that were added to the app are working as expected. The "getTopAppsByHost" method retrieves the correct information and the "addAppToHosts" and "removeAppFromHosts" modify the data in all the views.

### Challenges

Transforming the information in the JSON file to be grouped by hosts so it could be filtered and edited by different methods was quite challenging. I tried different approaches until I found one that worked for all of them.

At first I tried copying the data to prevent data mutation, but since the apps had to be edited from many different places, handling the original data seemed to be a better approach and the data only gets copied before being returned as the new state by the reducer.

### What to improve

There are always things that you want to improve when developing something. For example I would have added a confirmation message for add and remove apps from host.
 
I also haven't worked much with tests and I tried adding some testing with Enzyme and Chai, but there was so much going on and a big part of the app behaves conditionally that I was not able to.
 
If I had more time I would have done a lot more research on testing to add some.
