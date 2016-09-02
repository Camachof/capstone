const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CommentActions = require('../actions/comment_actions');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const Form = require('react-bootstrap').Form;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      body: "", user_id: SessionStore.currentUser().id,
      project_id: this.props.projectId,
      username: SessionStore.currentUser().username,
      error: ""
    };
  },
  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.sessionListener.remove();
  },
  _onChange(){
    this.setState({user_id: SessionStore.currentUser().id, username: SessionStore.currentUser().username, error: ""});
  },
  _onSubmit(e){
    e.preventDefault();
    let currentUser = SessionStore.currentUser();
    if(Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      this.setState({error: <label>Must be logged in!</label>});
    } else {
      CommentActions.createComment(this.state);
      this.setState({body: "", user_id: SessionStore.currentUser().id, project_id: this.props.projectId, error:""});
    }
  },
  _onBody(e){
    this.setState({body: e.target.value});
  },
  render(){
    return(
      <form>

        <FormGroup className="comment_wrapper">
          <FormControl
            componentClass="textarea"
            value={this.state.body}
            placeholder="Comment"
            onChange={this._onBody}
            className="comment_textarea"/>

        <Button type="submit" onClick={this._onSubmit} className="comment_submit_button">
            Submit
          </Button>
        </FormGroup>

        {this.state.error}

      </form>
    );
  }
});

module.exports = CommentForm;
