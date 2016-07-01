const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {projects: ProjectStore.all()};
  },
  componentDidMount(){
    ProjectStore.addListener(this._onChange);
    ProjectActions.fetchAllProjects();
  },
  _onChange(){
    this.setState({projects: ProjectStore.all()});
  },
  render(){
    const projects = this.state.projects.map( project => {  
      return (
        <div className="project_item">
          <img className="project_item_image" src={project.images}></img>
          <div className="project_info">
            <h1 className="project_item_title" >{project.title}</h1>
            <h3 className="project_item_body" >{project.body}</h3>
          </div>
        </div>
      );
    });
    return(
      <div className="projects_index">
        {projects}
      </div>
    );
  }
});

module.exports = ProjectIndex;
