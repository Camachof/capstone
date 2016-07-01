const React = require('react');
const LoginForm = require('./login_form.jsx');
const SignupForm = require('./signup_form.jsx');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const App = React.createClass({
  _onLogout(e){
    e.preventDefault();
    SessionActions.logout();
  },
  _onSignup(e){
    e.preventDefault();
    hashHistory.push(`/signup`);
  },
  _onLogin(e){
    e.preventDefault();
    hashHistory.push(`/login`);
  },
  render(){
    let greeting;
    let currentUser = SessionStore.currentUser();
    // greeting can be a greeting or the login/logout buttons

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      greeting = [
        <SignupForm />
      ];
    } else {
      greeting = [
        <h1>Hello {currentUser.username}!</h1>,
        <button onClick={this._onLogout}>Log out!</button>
      ];
    }

    // remeber to add greeting again after making header
    // {greeting}

    return(
      <div>
        <header>
          <div className="top_header" >
            <div>
                <img className="top_header_left_items" alt="Instructables" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467308145/header-logo_yroad2.png" />
                <a title="Explore" className="header_link" >Explore</a>
                <a title="Publish" className="header_link" >Publish</a>
                <a title="Classes" className="header_link" >Classes</a>
            </div>
            <div>
              <button className="header_buttons" onClick={this._onSignup}>Sign Up!</button>
              <button className="header_buttons" onClick={this._onLogin}>Log in!</button>
            </div>
          </div>
        </header>
        {this.props.children}
      </div>
    );

  }
});

module.exports = App;
