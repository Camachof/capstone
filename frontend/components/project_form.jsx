const React = require('react');
const ProjectActions = require('../actions/project_actions');
const UploadButton = require('./upload_button.jsx');
const SessionStore = require('../stores/session_store.js');
const ProjectStore = require('../stores/project_store.js');
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ProjectForm = React.createClass({
  getInitialState: function() {
    return {
      title: "", body: "", images: [], disabled: true, user_id: SessionStore.currentUser().id
    };
  },
  uploadedCallback(image){
    this.setState({disabled: false});
    this.setState({images: image.url});
  },
  _newProject(e){
    e.preventDefault();
    ProjectActions.createProject(this.state, function(project){
      hashHistory.push(`/project/${project.id}`);
    });
  },
  onTitleChange(e){
    this.setState({title: e.target.value});
  },
  onBodyChange(e){
    this.setState({body: e.target.value});
  },
  render(){
    return(
      <form>

        <FormGroup>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.onTitleChange}
          />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <FormControl
            componentClass="textarea"
            placeholder="Instructions"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
        </FormGroup>

        <UploadButton uploaded={this.uploadedCallback}/>

        <Button disabled={this.state.disabled} type="submit" onClick={this._newProject}>
          Submit
        </Button>

      </form>
    );
  }
});

module.exports = ProjectForm;
