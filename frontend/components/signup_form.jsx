const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store.js');
const ReactRouter = require('react-router');
const ErrorStore = require('../stores/error_store.js');
const hashHistory = ReactRouter.hashHistory;

const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: "", password: "", errors: {}
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._onChange);
    ErrorStore.addListener(this._onError);
  },
  _onError(){
    this.setState({ errors: ErrorStore.formErrors('signup')});
  },
  _onChange(){
    if (SessionStore.currentUser()){
      hashHistory.push(`/`);
    }
  },
  _onName(e){
    this.setState({username: e.target.value});
  },
  _onPass(e){
    this.setState({password: e.target.value});
  },
  _onSubmit(e){
    e.preventDefault();
    SessionActions.signup(this.state);
  },
  _onLogin(e){
    e.preventDefault();
    hashHistory.push(`/login`);
  },
  render(){
    const errors = [];
    for (var i in this.state.errors) {
      if (this.state.errors.hasOwnProperty(i)) {
        errors.push(`${i} ` + this.state.errors[i]);
      }
    }
    // hacky way to remove error from greeting. consider fixing.
    this.state.errors = {};

    return(
      <div>
        <h1>Sign Up!</h1>
        <button onClick={this._onLogin}>Log in!</button>
        <form onSubmit={this._onSubmit}>
          <ul>{errors}</ul>
          <input value={this.state.username} onChange={this._onName} />
          <input value={this.state.password} type="password" onChange={this._onPass} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
