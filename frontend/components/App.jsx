const React = require('react');
const LoginForm = require('./login_form.jsx');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const App = React.createClass({
  _onLogout(e){
    e.preventDefault();
    SessionActions.logout();
  },
  render(){
    let greeting;
    let currentUser = SessionStore.currentUser();
    // greeting can be a greeting or the login/logout buttons

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      greeting = [
        ////
        // <Link to='/' >Log in!</Link>,
        // <Link to='/' >Sign Up!</Link>
        //////
      ];
    } else {
      greeting = [
        <h1>Hello {currentUser.username}!</h1>,
        <button onClick={this._onLogout}>Log out!</button>
      ];
    }

    return(
      <div>
        {greeting}
        <LoginForm/>
      </div>
    );
  }
});

module.exports = App;
