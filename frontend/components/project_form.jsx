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
    if(this.props.params.projectId !== undefined){
      this.setState(ProjectStore.find(this.props.params.projectId));
    }
  },
  componentWillUnmount(){
    this.errorListener.remove();
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
  _addStep(){
    const bodyIndex = this.state.body.length;
    this.state.body[bodyIndex] = "";

    this.setState({step: this.state.step + 1, body: this.state.body});
  },
  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors()});
  },
  render(){
    let formButton;
    const location = window.location.hash;
    if(location.indexOf('edit') >= 0){
      formButton =
       <Button type="submit" onClick={this._updateProject}>
        Update
      </Button>;
    } else {
      formButton =
        <Button disabled={this.state.disabled} type="submit" onClick={this._newProject}>
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

    const errors = [];
    for (var i in this.state.errors) {
      if (this.state.errors.hasOwnProperty(i)) {
        if(i === "user_id"){
          errors.push("Must be logged in!");
        } else if (i === "title" || i === "body") {
          errors.push("Fields can't be empty!");
        }
      }
    }
    this.state.errors = {};

    if(this.state.video_url.indexOf("youtube")){
      const youtubeId = this.state.video_url.split("=")[1];
      this.videoThubnail = <img className="image_preview" src={"http://img.youtube.com/vi/" + youtubeId + "/default.jpg"}></img>;
    }

    return(
      <div className="item_wrapper">
        <form className="item_project">

          <FormGroup className="project_form_title">
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

          <VideoForm videoCallback={this._onVideoCallback}/>
          {this.videoThubnail}

          {formButton}
          {errors[0]}

        </form>
      </div>
    );
  }
});

module.exports = ProjectForm;
