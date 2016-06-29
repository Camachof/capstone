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
// Testing
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
//

const router = (
  <Router history={hashHistory} >
    <Route path="/" component={App} />
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(router, document.getElementById('start'));
});
