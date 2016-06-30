"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/App.jsx');
const ProjectIndex = require('./components/project_index.jsx');
// Testing
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
window.SessionStore = SessionStore;
//

const router = (
  <Router history={hashHistory} >
    <Route path="/" component={App} />
    <Route path="/projects" component={ProjectIndex} />
  </Router>
  // Projectindex should be be IndexRoute. Just testing.
);

document.addEventListener("DOMContentLoaded", function(){
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(router, document.getElementById('start'));
});
