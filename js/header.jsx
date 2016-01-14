var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <nav className="group header-nav">
          <h1 className="logo"><a onClick={this.props.switchPane.bind(null, "home")}>two headed monster</a></h1>
          <ul className="nav-links group">
            {["upcoming", "about", "contact", "donate"].map(function(link) {
              return <li key={link}><a onClick={this.props.switchPane.bind(null, link)}>{link}</a></li>;
            }.bind(this))}
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
