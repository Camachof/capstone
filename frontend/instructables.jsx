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
const ProjectForm = require('./components/project_form.jsx');
const SignUpModal = require('./components/signup_modal.jsx');
const LoginModal = require('./components/login_modal.jsx');
// Testing
const SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
window.SessionStore = SessionStore;

const router = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={ProjectIndex} />
      <Route path="/project/:projectId" component={ProjectItem}/>
      <Route path="/form" component={ProjectForm} />
      <Route path="/signup" component={SignUpModal} />
      <Route path="/login" component={LoginModal} />
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function(){
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(router, document.getElementById('start'));
});
