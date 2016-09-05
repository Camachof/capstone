const React = require("react");
const Button = require('react-bootstrap').Button;

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();

    cloudinary.openUploadWidget({cloud_name: 'doilr7vvv', upload_preset: 'v24sfxqs'}, function(error, results){
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
