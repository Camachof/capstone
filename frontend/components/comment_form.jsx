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
      project_id: this.props.projectId, errors: []
    };
  },
  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this._onChange);
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
  },
  componentWillUnmount(){
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  _onChange(){
    this.setState({user_id: SessionStore.currentUser().id});
  },
  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors()});
  },
  _onSubmit(e){
    e.preventDefault();
    CommentActions.createComment(this.state);
    this.setState({body: "", user_id: SessionStore.currentUser().id, project_id: this.props.projectId});
  },
  _onBody(e){
    this.setState({body: e.target.value});
  },
  render(){
    return(
      <Form>

        <FormGroup className="comment_wrapper">
          <FormControl
            type="text"
            value={this.state.body}
            placeholder="Comment"
            onChange={this._onBody}
            className="comment_textarea"
          />
          <Button type="submit" onClick={this._onSubmit} className="comment_submit_button">
            Submit
          </Button>
        </FormGroup>

        {this.state.errors[0]}

      </Form>
    );
  }
});

module.exports = CommentForm;
