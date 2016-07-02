const React = require("react");

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
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
