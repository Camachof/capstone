const React = require('react');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store.js');

const ProjectIndex = React.createClass({
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
    this.setState({project: ProjectStore.fetchProject(this.props.params.projectId)});
  },
  render(){
    debugger;
    const images = this.state.project.images.map( image => {
      return <img className="project_item_image" src={images}></img>;
    });
    return(
      <div className="project_item">
        {images}
        <div className="project_info">
          <h1 className="project_item_title">{this.state.project.title}</h1>
          <h3 className="project_item_body">{this.state.project.body}</h3>
          <h3 className="project_item_author">{this.state.project.author}</h3>
        </div>
      </div>
    );
  }
});
