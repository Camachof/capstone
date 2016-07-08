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
const HelpBlock = require('react-bootstrap').HelpBlock;

const LogForm = React.createClass({
  getInitialState: function() {
    return {
      username: "", password: "", errors: {}
    };
  },
  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this._onChange);
    this.errorListener = ErrorStore.addListener(this._onError);
  },
  componentWillUnmount(){
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  _onError(){
    this.setState({ errors: ErrorStore.formErrors()});
  },
  _onChange(){
    if (SessionStore.currentUser()){
      this.props.closeModal();
      let regex = /\/(.*?)\?/;
      let strToMatch = window.location.hash;
      let matched = regex.exec(strToMatch)[1];
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
  _onDemoLogIn(e){
    e.preventDefault();
    SessionActions.login({username: "guest", password: "password"});
  },

  render(){
    const errors = [];
    for (var i in this.state.errors) {
      if (this.state.errors.hasOwnProperty(i)) {
        errors.push(i + " " + this.state.errors[i]);
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

        <FormControl.Feedback />
        <HelpBlock>{errors}</HelpBlock>

        <Button type="submit" onClick={this._onSignUp}>
          Sign Up!
        </Button>

        <Button type="submit" onClick={this._onLogIn}>
          Log in!
        </Button>

        <Button type="submit" onClick={this._onDemoLogIn}>
          Demo Log in!
        </Button>

      </form>
    );
  }
});

module.exports = LogForm;
