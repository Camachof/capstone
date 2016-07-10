const React = require("react");
const Button = require('react-bootstrap').Button;

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(error === null){
        this.props.uploaded(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <Button className="image_upload_button" onClick={this.upload}>Upload Image</Button>
    );
  }
});

module.exports = UploadButton;
