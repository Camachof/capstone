const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');
const SlideShow = require('./slide_show.jsx');
const Glyphicon = require('react-bootstrap').Glyphicon;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {projects: ProjectStore.all()};
  },
  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.projectListener.remove();
  },
  _onChange(){
    this.setState({projects: ProjectStore.all()});
  },
  _takeToProject(e){
    hashHistory.push(`project/${e.target.value}`);
  },
  _onTitleClick(e){
    e.preventDefault();
    hashHistory.push(`/project/${e.target.value}`);
  },
  render(){
    const projects = this.state.projects.map( project => {
      return (
        <div className="project_item" key={project.id}>
          <a onClick={this._takeToProject}>
            <img value={project.id} className="project_item_image" src={project.images}></img>
          </a>
          <div className="project_info">
            <a className="project_item_title" value={project.id} onClick={this._onTitleClick} >{project.title}</a>
            <p className="project_item_author" >by {project.author.username}</p>
          </div>
        </div>
      );
    });
    return(
      <div className="projects_index_wrapper">
        <SlideShow/>
        <h3 className="featured_projects" ><Glyphicon glyph="star" /> Featured</h3>
        <div className="projects_index">
          {projects}
        </div>
      </div>
    );
  }
});

module.exports = ProjectIndex;
