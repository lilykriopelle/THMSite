var React = require('react');

var ShowPreview = React.createClass({

  render: function() {
    return (
      <div className={"show-thumb " + this.props.classes.join(" ")} >
        <img src={this.props.imageUrl}/>
        <a href={this.props.link} className="overlay">
          <div style={{position: "absolute", bottom: 16, right: 20}}>
          {this.props.title.toUpperCase()}
          </div>
        </a>
      </div>
    );
  }

});

module.exports = ShowPreview;
