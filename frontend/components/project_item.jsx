const React = require('react');
const ProjectActions = require('../actions/project_actions');
const CommentActions = require('../actions/comment_actions');
const ProjectStore = require('../stores/project_store.js');
const CommentForm = require('./comment_form.jsx');
const SessionStore = require('../stores/session_store.js');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ProjectItem = React.createClass({
  getInitialState: function() {
    return {
      project: {}
    };
  },
  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
    ProjectActions.fetchProject(this.props.params.projectId);
  },
  componentWillUnmount(){
    this.projectListener.remove();
  },
  _onChange(){
    this.setState({project: ProjectStore.find(this.props.params.projectId)});
  },
  _onDelete(){
    ProjectActions.deleteProject(this.props.params.projectId);
    hashHistory.push(`/`);
  },
  _onDeleteComment(e){
    e.preventDefault();
    CommentActions.deleteComment(e.target.value);
  },
  _onUpdate(){
    hashHistory.push(`/project/${this.props.params.projectId}/edit`);
  },
  deleteButtonLogic(comment){
    if(comment.user_id === this.state.project.author || comment.user_id === SessionStore.currentUser().id){
      return <button className="item_comment_delete" value={comment.id} onClick={this._onDeleteComment}>Delete Comment</button>;
    } else {
      return "";
    }
  },
  render(){
    let author;
    if(Object.keys(this.state.project).length === 0 && this.state.project.constructor === Object) {
      author = <p>{this.state.project.author}</p>;
    } else {
      author = <p>{this.state.project.author.username}</p>;
    }

    const comments = this.state.project.comments ? this.state.project.comments.map( comment => {
      return <div className="item_comments_wrapper" key={comment.id}>
                <h3 className="item_comment" >{comment.body}</h3>
                {this.deleteButtonLogic(comment)}
            </div>;
    }) : "";

    let url;
    let videoPlayer;
    if(this.state.project.video_url){
      videoPlayer = "videoPlayer";
      if(this.state.project.video_url.indexOf("youtube") >= 0){
        url = "https://www.youtube.com/v/" + this.state.project.video_url.split("=")[1];
      } else {
        const splitUrl = this.state.project.video_url.split("/");
        url = "https://player.vimeo.com/video/" + splitUrl[splitUrl.length - 1];
      }
    } else {
      videoPlayer = "noVideoPlayer";
      url = "";
    }

    let deleteButton;
    let updateButton;
    if(this.state.project.author){
      if (SessionStore.currentUser().id === this.state.project.author.id){
        deleteButton = <button className="item_header_button" onClick={this._onDelete}>Delete</button>;
        updateButton = <button className="item_header_button_update" onClick={this._onUpdate}>Update</button>;
      } else {
        deleteButton = "";
        updateButton = "";
      }
    } else {
      deleteButton = "";
      updateButton = "";
    }

    return(
      <div className="item_wrapper">
        <div className="item_project">
          <div className="item_header">
            <div className="item_header_left">
              <h1 className="item_title">{this.state.project.title}&nbsp;</h1>
              <p>by&nbsp;</p>
              {author}
            </div>
            <button className="item_header_button">Download</button>
            {deleteButton}
            {updateButton}
          </div>
          <div className="item_body_wrapper">
            <div className="item_image_wrapper">
              <img className="item_image" src={this.state.project.images}></img>
            </div>
            <iframe className={videoPlayer} width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>
            <div>
              <p className="item_body" >{this.state.project.body}</p>
            </div>
          </div>
            {comments}
          <CommentForm projectId={this.props.params.projectId}/>
        </div>
      </div>
    );
  }
});

module.exports = ProjectItem;
