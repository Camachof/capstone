const React = require('react');

const LoginModal = require('./login_modal.jsx');
const SignUpModal = require('./signup_modal.jsx');

const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const App = React.createClass({
  _onLogout(e){
    e.preventDefault();
    SessionActions.logout();
    hashHistory.push(`/`);
  },
  _onSignup(e){
    e.preventDefault();
    hashHistory.push(`/signup`);
    // change this to work with modal
  },
  _onLogin(e){
    e.preventDefault();
    hashHistory.push(`/login`);
    // change this to work with modal
  },
  render(){
    let greeting;
    let currentUser = SessionStore.currentUser();
    // greeting can be a greeting or the login/logout buttons

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      greeting = [
        <div>
          <SignUpModal />
          <LoginModal />
        </div>
      ];
    } else {
      greeting = [
        <h5>Hello {currentUser.username}!</h5>,
        <a onClick={this._onLogout}>Logout</a>
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
            {greeting}
          </div>
        </header>
        {this.props.children}
      </div>
    );

  }
});

module.exports = App;
