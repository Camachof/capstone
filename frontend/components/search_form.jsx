const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
// bootstrap
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  handleChange(e){
    this.setState(e.target.value);
  },
  render(){
    return(
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
    );
  }
});
