const React = require('react');
const LogForm = require('./log_form.jsx');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store.js');

const LogModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <Button
          className="trial"
          onClick={this.open}
        >
        {this.props.name}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <LogForm closeModal={this.close} />
          </Modal.Body>
        </Modal>
      </Button>
    );
  }
});

module.exports = LogModal;
