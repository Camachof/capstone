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
    return {projects: ProjectStore.all(), results: ""};
  },
  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this._onChange);
    ProjectActions.fetchAllProjects(this.state.value);
  },
  componentWillUnmount(){
    this.projectListener.remove();
  },
  _onChange(){
    this.setState({projects: ProjectStore.all()});
    this._notFound();
  },
  _notFound(){
    this.setState({results:
      <div className="no_results">
        <h2 className="no_results_text">No results found</h2>
        <img src="http://res.cloudinary.com/doilr7vvv/image/upload/v1468099695/download_gfbmjd.png" ></img>
      </div>
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

    return(
      <div className="projects_index_wrapper">
        <SlideShow/>
        <h3 id={this.state.projects.length < 1 ? "disappear" : ""} className="featured_projects" ><Glyphicon glyph="star" id="star"/> Featured</h3>
        <div className="projects_index">
          {this.state.projects.length < 1 ? this.state.results : projects}
        </div>
      </div>
    );
  }
});

module.exports = ProjectIndex;
