var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <p>
          Like what you see? <a href="mailto:twoheadedmonster.theater@gmail.com?subject=mailing list">Sign up for our mailing list</a> to be notified about future events!
        </p>
      </footer>
    );
  }

});

module.exports = Footer;
