const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');

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
      author = <h3>{this.state.project.author}</h3>;
    } else {
      author = <h3>{this.state.project.author.username}</h3>;
    }
    return(
      <div >
        <img src={this.state.project.images}></img>
        <div>
          <h1>{this.state.project.title}</h1>
          <h3>{this.state.project.body}</h3>
          {author}
        </div>
      </div>
    );
  }
});

module.exports = ProjectItem;
