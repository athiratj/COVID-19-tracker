# COVID19 Tracker App

> A web application for visualizing the up-to-date COVID-19 disease status across the world.

Built with:

- [Create React App](https://github.com/facebook/create-react-app)
- [disease.sh API](https://github.com/disease-sh/API)
- [Chart.js](https://www.chartjs.org/), an open source HTML5 charts for websites
- [Leaflet](https://leafletjs.com/), an open-source JavaScript library for mobile-friendly interactive maps
- [Material UI](https://material-ui.com/)


## Setup

* Clone the repository using the command `git clone https://github.com/athiratj/COVID-19-tracker.git`.
 
  Run the following commands:
* `npm install`
* `npm start`
* Open http://localhost:3000 to view it in the browser.


## Deploying App to Firebase

1. Log in to your [firebase](https://firebase.google.com/) console and create a new project.
2. Install the firebase CLI tools.
```
$ npm install -g firebase-tools
$ firebase -V
```
3. Setup a firebase context for the current application in the folder containing project, and choose the created project.
```
$ firebase init
```
4. Make sure that you are logged in to your Firebase account. Once you are logged in, you can close the window.
```
$ firebase login
```
5. Deploy our application using the following command.
```
$ firebase deploy
```
Done!



