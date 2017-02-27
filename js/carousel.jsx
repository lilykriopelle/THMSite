var React = require('react');
var Gallery = require('react-photo-gallery');

var PhotoGallery = React.createClass({
  render: function () {
    return (
      <Gallery
        photos={this.props.items}
        backdropClosesModal={true}
      />
    );
  }
});

module.exports = PhotoGallery;
