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
    if (ErrorStore.form() === 'login'){
      this.setState({ errors: ErrorStore.formErrors()});
    }
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
  render(){
    return(
      <form onSubmit={this._onSubmit}>
        <li>signup page yoooo</li>
        <input value={this.state.username} onChange={this._onName} />
        <input value={this.state.password} type="password" onChange={this._onPass} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});

module.exports = LoginForm;
