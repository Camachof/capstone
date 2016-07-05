const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');
const CommentForm = require('./comment_form.jsx');

const ProjectItem = React.createClass({
  getInitialState: function() {
    return {
      project: {}
    };
  },
  componentDidMount(){
    ProjectStore.addListener(this._onChange);
    ProjectActions.fetchProject(this.props.params.projectId);
  },
  _onChange(){
    this.setState({project: ProjectStore.find(this.props.params.projectId)});
  },
  render(){
    let author;
    if(Object.keys(this.state.project).length === 0 && this.state.project.constructor === Object) {
      author = <p>{this.state.project.author}</p>;
    } else {
      author = <p>{this.state.project.author.username}</p>;
    }

    const comments = this.state.project.comments ? this.state.project.comments.map( comment => {
      return <div className="item_comments_wrapper">
                <h3 className="item_comment" >{comment.body}</h3>
            </div>;
    }) : "";
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
          </div>
          <div className="item_body_wrapper">
            <div className="item_image_wrapper">
              <img className="item_image" src={this.state.project.images}></img>
            </div>
            <div>
              <p>{this.state.project.body}</p>
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
