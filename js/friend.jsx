var React = require('react');

var Friend = React.createClass({

  render: function () {
    return (
      <li>
        <a className="friend" href={this.props.website} target="_blank">
          <div className="details">
            <h1>{this.props.name}</h1>
            <div>{this.props.title}</div>
          </div>
        </a>
      </li>
    );
  }

});

module.exports = Friend;
