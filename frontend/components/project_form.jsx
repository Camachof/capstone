const React = require('react');
const ProjectActions = require('../actions/project_actions');
const UploadButton = require('./upload_button.jsx');
const SessionStore = require('../stores/session_store.js');

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
    ProjectActions.createProject(this.state);
    hashHistory.push(`projects/${this.state.id}`);
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
        <UploadButton uploaded={this.uploadedCallback}/>
        <input onChange={this.onTitleChange} value={this.state.title} type="text"></input>
        <input onChange={this.onBodyChange} value={this.state.body} type="textarea"></input>
        <input type='submit' disabled={this.state.disabled} onClick={this._newProject}></input>
      </form>
    );
  }
});

module.exports = ProjectForm;
