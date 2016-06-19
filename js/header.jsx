var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <nav className="group header-nav">
          <h1 className="logo"><a href="/">two headed rep</a></h1>
          <p className="tagline">creating a new canon</p>
          <ul className="nav-links group">
            <li><a href="/about">about</a></li>
            <li><a href="/festivals">festivals</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/donate">donate</a></li>
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
