const React = require('react');
const ProjectActions = require('../actions/project_actions');
const CommentActions = require('../actions/comment_actions');
const ProjectStore = require('../stores/project_store.js');
const CommentForm = require('./comment_form.jsx');
const SessionStore = require('../stores/session_store.js');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Image = require('react-bootstrap').Image;
const Button = require('react-bootstrap').Button;

const ProjectItem = React.createClass({
  getInitialState: function() {
    return {
      project: {}
    };
  },
  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this._onLogIn);
    ProjectActions.fetchProject(this.props.params.projectId);
  },
  componentWillUnmount(){
    this.projectListener.remove();
    this.sessionListener.remove();
  },
  _onChange(){
    this.setState({project: ProjectStore.find(this.props.params.projectId)});
  },
  _onLogIn(){
    this.forceUpdate();
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
      return <Button className="item_comment_delete" value={comment.id} onClick={this._onDeleteComment}>Delete</Button>;
    } else {
      return "";
    }
  },
  render(){
    let author;
    if(Object.keys(this.state.project).length === 0 && this.state.project.constructor === Object) {
      author = <p className="item_title_inline">{this.state.project.author}</p>;
    } else {
      author = <p className="item_title_inline">{this.state.project.author.username}</p>;
    }

    const comments = this.state.project.comments ? this.state.project.comments.map( comment => {
      return <div className="item_comments_wrapper" key={comment.id}>
                <div className="comment_author_date">
                  <h3 className="item_comment_author" >{comment.username}</h3>
                  <h3 className="item_comment_author" >{comment.created_at ? new Date(comment.created_at).toLocaleString() : ""}</h3>
                </div>
                <h3 className="item_comment" >{comment.body}</h3>
                {this.deleteButtonLogic(comment)}
            </div>;
    }).reverse() : "";

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
        deleteButton = <Button className="item_header_button" onClick={this._onDelete}>Delete</Button>;
        updateButton = <Button className="item_header_button" onClick={this._onUpdate}>Update</Button>;
      } else {
        deleteButton = "";
        updateButton = "";
      }
    } else {
      deleteButton = "";
      updateButton = "";
    }

    const date = new Date(this.state.project.created_at);


    return(
      <div className="item_wrapper">
        <div className="item_project">
          <div className="item_header">
            <div className="item_header_left">
              <div className="item_title_wrapper">
                <h1 className="item_title">{this.state.project.title}&nbsp;</h1>
                <p className="item_title_inline">by&nbsp;</p>
                {author}
              </div>
              <p className="project_post_date">{date.toLocaleString()}</p>
            </div>
            <div className="item_subheader">
              {deleteButton}
              {updateButton}
            </div>
          </div>
          <div className="item_body_wrapper">
            <div className="item_image_wrapper">
              <Image className="item_image" src={this.state.project.images} responsive></Image>
            </div>
            <div>
              <h2>Description</h2>
              <p className="item_body" >{this.state.project.description}</p>
            </div>
            <div>
              <h2>Supplies</h2>
              <p className="item_body" >{this.state.project.material}</p>
            </div>
            <div>
              <h2>Instructions</h2>
              <p className="item_body" >{this.state.project.body}</p>
            </div>
            <iframe id='video_player' className={videoPlayer} width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
            <CommentForm projectId={this.props.params.projectId}/>
            {comments}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProjectItem;
