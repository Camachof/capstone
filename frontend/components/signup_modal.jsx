const React = require('react');
const SignUpForm = require('./signup_form.jsx');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const SignUpModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  componentDidMount(){
    let show;
    if(location.hash.indexOf("#/signup") !== -1){
      show = true;
    } else {
      show = false;
    }
    this.setState({showModal: show});
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  _renderSiblingModal(e){
    e.preventDefault();
    this.close();
    hashHistory.push("/login");
  },

  render() {

    return (
      <a
          className="trial"
          onClick={this.open}
        >
        Sign Up!
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm closeModal={this.close} />
          </Modal.Body>
          <Modal.Footer>
            <a onClick={this._renderSiblingModal}>Login</a>
          </Modal.Footer>
        </Modal>
      </a>
    );
  }
});

module.exports = SignUpModal;
