const React = require('react');

const LogModal = require('./log_modal.jsx');

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
  _onExplore(e){
    e.preventDefault();
    hashHistory.push("/projects");
  },
  _onPublish(e){
    e.preventDefault();
    hashHistory.push("/project/form");
  },
  render(){
    let greeting;
    let currentUser = SessionStore.currentUser();
    // greeting can be a greeting or the login/logout buttons

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      greeting = [
        <div>
          <LogModal />
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
                <img alt="Instructables" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467308145/header-logo_yroad2.png" />
                <a title="Explore" className="header_link" onClick={this._onExplore}>Explore</a>
                <a title="Publish" className="header_link" onClick={this._onPublish}>Publish</a>
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
