const React = require('react');
const ProjectActions = require('../actions/project_actions');
const UploadButton = require('./upload_button.jsx');
const VideoForm = require('./video_form.jsx');
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
      title: "", body: "",
      images: [], disabled: true,
      user_id: SessionStore.currentUser().id,
      video_url: ""
    };
  },
  componentDidMount(){
    // this.projectListener = ProjectStore.addListener(this._onChange);
    if(this.props.params.projectId !== undefined){
      // ProjectActions.fetchProject(this.props.params.projectId);
      this.setState(ProjectStore.find(this.props.params.projectId));
    }

  },
  // componentWillUnmount(){
  //   this.projectListener.remove();
  // },
  // _onChange(){
  //   const toEdit = ProjectStore.find(this.props.params.projectId);
  //   if (JSON.stringify(toEdit) !== '{}' && toEdit !== undefined){
  //     this.setState(toEdit);
  //   } else {
  //     this.setState({});
  //   }
  // },
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
    if(this.state.disabled === false){
      showImage =
        <img src={this.state.images}></img>;
    } else {
      showImage = "";
    }

    return(
      // <div className="form_instructions">
      //   <img src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467924047/footer-robot_fdq4nm.png"></img>
      //   <div>
      //     Come up with a tit
      //   </div>
      // </div>

      <div className="item_wrapper">
        <form className="item_project">

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
          {showImage}
          <VideoForm videoCallback={this._onVideoCallback}/>

          {formButton}

        </form>
      </div>
    );
  }
});

module.exports = ProjectForm;
