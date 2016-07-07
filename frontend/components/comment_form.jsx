const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CommentActions = require('../actions/comment_actions');
const SessionStore = require('../stores/session_store.js');
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      body: "", user_id: SessionStore.currentUser().id, project_id: this.props.projectId
    };
  },
  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.sessionListener.remove();
  },
  _onChange(){
    this.setState({user_id: SessionStore.currentUser().id});
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
      <form>

        <FormGroup>
          <FormControl
            type="text"
            value={this.state.body}
            placeholder="Comment"
            onChange={this._onBody}
          />
        </FormGroup>

        <Button type="submit" onClick={this._onSubmit}>
          Submit
        </Button>

      </form>
    );
  }
});

module.exports = CommentForm;
