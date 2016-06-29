const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('./stores/session_store.js');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: "", password: ""
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._onChange);
  },
  _onChange(){
    if (SessionStore.currentUser){
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
    SessionActions.login(this.state);
    hashHistory.push(`/`);
  },
  render(){
    return(
      <form onSubmit={this._onSubmit}>
        <input value={this.state.username} onClick={this._onName}></input>
        <input value={this.state.password} type="password" onClick={this._onPass}></input>
        <input type="submit" value="Submit" />
      </form>
    );
  }
});

module.exports = LoginForm;
