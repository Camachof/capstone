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
const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');
const ProjectItem = require('./components/project_item.jsx');
// Testing
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
window.SessionStore = SessionStore;
//

const router = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <Route path="/projects" component={ProjectIndex} />
      <Route path="/projects/:projectId" component={ProjectItem}/>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Route>
  </Router>
  // Projectindex should be be IndexRoute. Just testing.
);


document.addEventListener("DOMContentLoaded", function(){
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(router, document.getElementById('start'));
});
