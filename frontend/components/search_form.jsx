const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ProjectActions = require('../actions/project_actions.js');
const ProjectStore = require('../stores/project_store.js');
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
const Navbar = require('react-bootstrap').Navbar;

const SearchForm = React.createClass({
  getInitialState: function() {
    return {
      projects: []
    };
  },
  componentDidMount(){
    ProjectStore.addListener(this._onChange);
  },
  _onChange(){
    const filteredProjects = ProjectStore.all().map( project => {
      return <h1>{project.title}</h1>;
    });
    this.setState({projects: filteredProjects});
  },
  handleChange(e){
    e.preventDefault();
    ProjectActions.fetchAllProjects(e.target.value);
  },
  render(){
    return(
      <div>
        <Navbar.Form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </div>
    );
  }
});
// {this.state.projects}
module.exports = SearchForm;
