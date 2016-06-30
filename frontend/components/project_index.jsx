const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {posts: ProjectStore.all()};
  },
  componentDidMount(){
    ProjectStore.addListener(this._onChange);
    ProjectActions.fetchAllProjects();
  },
  _onChange(){
    this.setState({posts: ProjectStore.all()});
  },
  render(){
    debugger
    const projects = this.state.posts.map( post => {
      return <li>{post.title}</li>;
    });
    return(
      <div>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectIndex;
