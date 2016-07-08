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
const LogModal = require('./components/log_form.jsx');
const ProjectItem = require('./components/project_item.jsx');
const ProjectForm = require('./components/project_form.jsx');
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
        <Route path="/project/:projectId/edit" component={ProjectForm}/>
      <Route path="/form" component={ProjectForm}/>
    </Route>
  </Router>
);


// function checkedLoggedin(nextState, replace, callback){
//   debugger;
//   const currentUser = SessionStore.currentUser();
//   if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
//     replace({
//       pathname: '/log',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }

document.addEventListener("DOMContentLoaded", function(){
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(router, document.getElementById('start'));
});
