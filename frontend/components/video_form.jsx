const React = require('react');
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
const Modal = require('react-bootstrap').Modal;

const VideoForm = React.createClass({
  getInitialState() {
    return { showModal: false, url: "" };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  _onUrl(e){
    this.setState({url: e.target.value});
  },
  _onSubmit(e){
    e.preventDefault();
    this.props.videoCallback(this.state.url);
    this.close();
  },
  render(){
    return(
      <Button
          className="trial"
          onClick={this.open}
        >
        Upload Video
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <form>

              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.url}
                  placeholder="Please enter video url!"
                  onChange={this._onUrl}
                />
              </FormGroup>

              <Button type="submit" onClick={this._onSubmit}>
                Add video!
              </Button>

            </form>
          </Modal.Body>
        </Modal>
      </Button>
    );
  }
});

module.exports = VideoForm;
