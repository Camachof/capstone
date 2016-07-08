const React = require('react');
const ProjectActions = require('../actions/project_actions');
const UploadButton = require('./upload_button.jsx');
const VideoForm = require('./video_form.jsx');
const SessionStore = require('../stores/session_store.js');
const ProjectStore = require('../stores/project_store.js');
const ErrorStore = require('../stores/error_store.js');
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
      title: "", body: "",
      images: [], disabled: true,
      user_id: SessionStore.currentUser().id,
      video_url: "", errors: {}
    };
  },
  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
    this.sessionListener = SessionStore.addListener(this._onUserChange);
    if(this.props.params.projectId !== undefined){
      this.setState(ProjectStore.find(this.props.params.projectId));
    }
  },
  componentWillUnmount(){
    this.errorListener.remove();
    this.sessionListener.remove();
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
  _updateProject(e){
    e.preventDefault();
    ProjectActions.updateProject(this.state, (project) => {
      hashHistory.push(`/project/${this.props.params.projectId}`);
    });
  },
  onTitleChange(e){
    this.setState({title: e.target.value});
  },
  onBodyChange(e){
    this.setState({body: e.target.value});
  },
  _onVideoCallback(url){
    this.setState({video_url: url});
  },
  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors()});
  },
  _onUserChange(){
    this.setState({user_id: SessionStore.currentUser().id});
  },
  render(){
    let formButton;
    const location = window.location.hash;
    if(location.indexOf('edit') >= 0){
      formButton =
       <Button className="form_submit_button" type="submit" onClick={this._updateProject}>
        Update
      </Button>;
    } else {
      formButton =
        <Button className="form_submit_button" disabled={this.state.disabled} type="submit" onClick={this._newProject}>
          Submit
        </Button>;
    }

    let showImage;
    // need to add styling to make it look okay
    if(this.state.disabled === false){
      showImage =
        <img className="image_preview" src={this.state.images}></img>;
    } else {
      showImage = "";
    }

    for (var i in this.state.errors) {
      if (this.state.errors.hasOwnProperty(i)) {
        if(i === "title" || i === "body" || i === "image_url") {
          this.currentError = <label className="error_label">Fields can't be blank!</label>;
        } else {
          this.currentError = "";
        }
      }
    }
    this.state.errors = {};

    if(this.state.video_url.indexOf("youtube") !== -1){
      const youtubeId = this.state.video_url.split("=")[1];
      this.videoThumbnail = <img className="image_preview" src={"http://img.youtube.com/vi/" + youtubeId + "/default.jpg"}></img>;
    } else {
      this.videoThumbnail = "";
    }

    return(
      <div className="item_wrapper">
        <form className="item_project">

          <FormGroup className="project_form_title">
            {this.currentError}

            <ControlLabel>Write a descriptibe title for your project</ControlLabel>
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.onTitleChange}
            />
          </FormGroup>

          <FormGroup className="project_form_body">
            <ControlLabel>List all steps</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Instructions"
              value={this.state.body}
              onChange={this.onBodyChange}
              className="project_form_body_input"
            />
          </FormGroup>

          <div className="form_image_upload">
            {showImage}
            <UploadButton uploaded={this.uploadedCallback}/>
          </div>

          {this.videoThumbnail}
          <VideoForm videoCallback={this._onVideoCallback}/>

          {formButton}

        </form>
      </div>
    );
  }
});

module.exports = ProjectForm;
