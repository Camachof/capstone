const React = require('react');
const LoginForm = require('./login_form.jsx');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const LoginModal = React.createClass({

  getInitialState() {
    return { showModal: false };
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
    hashHistory.push("/signup");
  },

  render() {

    return (
      <a
          className="trial"
          onClick={this.open}
        >
        Log In!
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm closeModal={this.close} />
          </Modal.Body>
          <Modal.Footer>
            <a onClick={this._renderSiblingModal}>Sign Up</a>
          </Modal.Footer>
        </Modal>
      </a>
    );
  }
});

module.exports = LoginModal;
