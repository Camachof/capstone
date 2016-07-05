const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');
const SlideShow = require('./slide_show.jsx');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

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
  _takeToProject(e){
    hashHistory.push(`project/${e.target.value}`);
  },
  render(){
    const projects = this.state.projects.map( project => {
      return (
        <div className="project_item">
          <a onClick={this._takeToProject}>
            <img value={project.id} className="project_item_image" src={project.images}></img>
          </a>
          <div className="project_info">
            <h1 className="project_item_title" >{project.title}</h1>
            <h3 className="project_item_body" >{project.body}</h3>
          </div>
        </div>
      );
    });
    return(
      <div className="projects_index_wrapper">
        <SlideShow/>
        <h3 className="featured_projects" >Featured</h3>
        <div className="projects_index">
          {projects}
        </div>
      </div>
    );
  }
});



module.exports = ProjectIndex;
