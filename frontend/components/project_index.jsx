const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');
const SlideShow = require('./slide_show.jsx');
const Glyphicon = require('react-bootstrap').Glyphicon;
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {projects: ProjectStore.all(), results: "", defaults: ProjectStore.defaults(), backup: false};
  },
  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
    ProjectActions.fetchAllProjects();
  },
  componentWillUnmount(){
    this.projectListener.remove();
  },
  _onChange(){
    this.setState({projects: ProjectStore.all(), backup: ProjectStore.allDefaults()});

    if(ProjectStore.defaults() === true || this.state.projects.length < 1){
      ProjectActions.fetchDefaultProjects();
      this._notFound();
    } else {
      this.setState({results: "", defaults: false});
    }
  },
  _notFound(){
    this.setState({results:
      <div className="no_results">
        <span className="no_results_text">No results found <img src="http://res.cloudinary.com/doilr7vvv/image/upload/v1472940354/sad_dmvg5l.png" ></img>, but check out these cool projects:</span>
      </div>,
      defaults: true
    });
  },
  render(){
    let projects = this.state.projects.map( project => {
      return (
        <div className="project_item" key={project.id}>
            <Link to={`project/${project.id}`}>
              <img className="project_item_image" src={project.images} />
            </Link>
          <div className="project_info">
            <Link to={`project/${project.id}`} className="project_item_title">
              {project.title}
            </Link>
            <p className="project_item_author" >by {project.author.username}</p>
          </div>
        </div>
      );
    });

    let backup;
    if (this.state.defaults){
      backup = this.state.backup.map( project => {
        return (
          <div className="project_item" key={project.id}>
            <Link to={`project/${project.id}`}>
              <img className="project_item_image" src={project.images} />
            </Link>
            <div className="project_info">
              <Link to={`project/${project.id}`} className="project_item_title">
                {project.title}
              </Link>
              <p className="project_item_author" >by {project.author.username}</p>
            </div>
          </div>
        );
      });
    }

    return(
      <div className="projects_index_wrapper">
        <SlideShow/>
        {this.state.result !== "" ? this.state.results : ""}
        <div className="projects_index">
          {this.state.defaults ? backup : projects }
        </div>
      </div>
    );
  }
});

module.exports = ProjectIndex;
