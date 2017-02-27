var React = require('react');

var Blog = React.createClass({
  render: function () {
    return (
      <main className="about group" style={{overflow: "hidden"}}>
        <iframe id="tumblrContent" width="100%" height="1000" src="http://twoheadedrep.tumblr.com" frameBorder="0"></iframe>
      </main>
    );
  }

});

module.exports = Blog;
