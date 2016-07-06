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
      value: ""
    };
  },
  componentDidMount(){
    ProjectActions.fetchAllProjects(this.state.value);
  },
  handleChange(e){
    e.preventDefault();
    this.setState({value: e.target.value});
  },
  _onSubmit(e){
    e.preventDefault();
    this.setState({value: ""});
    this.props.removeCarousel();
    ProjectActions.fetchAllProjects(this.state.value);
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
          <button onClick={this._onSubmit} type="submit">Submit</button>
          </FormGroup>
        </Navbar.Form>
      </div>
    );
  }
});

module.exports = SearchForm;
