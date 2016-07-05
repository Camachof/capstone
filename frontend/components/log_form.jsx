const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const LogForm = React.createClass({
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
    this.setState({ errors: ErrorStore.formErrors()});
  },
  _onChange(){
    if (SessionStore.currentUser()){
      this.props.closeModal();
      var re = /\/(.*?)\?/;
      var strToMatch = window.location.hash;
      var matched = re.exec(strToMatch)[1];
      hashHistory.push(matched);
    }
  },
  _onName(e){
    this.setState({username: e.target.value});
  },
  _onPass(e){
    this.setState({password: e.target.value});
  },
  _onSignUp(e){
    e.preventDefault();
    SessionActions.signup({username: this.state.username, password: this.state.password});
  },
  _onLogIn(e){
    e.preventDefault();
    SessionActions.login({username: this.state.username, password: this.state.password});
  },

  render(){
    const errors = [];
    for (var i in this.state.errors) {
      if (this.state.errors.hasOwnProperty(i)) {
        errors.push(this.state.errors[i]);
      }
    }
    // hacky way to remove error from greeting. consider fixing.
    this.state.errors = {};

    return(
      <form>

        <FormGroup>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this._onName}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this._onPass}
          />
        </FormGroup>

        <Button type="submit" onClick={this._onSignUp}>
          Sign Up!
        </Button>

        <Button type="submit" onClick={this._onLogIn}>
          Log in!
        </Button>

      </form>
    );
  }
});

module.exports = LogForm;
