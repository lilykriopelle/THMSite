var React = require('react');

var Header = React.createClass({

  aboutDropdown: function () {
    // <li><a onClick={this.props.switchPane.bind(null, "friends")}>friends</a></li>
    return (
      <ul className="dropdown">
        <li><a onClick={this.props.switchPane.bind(null, "company")}>company</a></li>
        <li><a onClick={this.props.switchPane.bind(null, "team")}>team</a></li>
      </ul>
    );
  },

  showDropdown: function () {
    return (
        <ul className="dropdown">
        <li><a onClick={this.props.switchPane.bind(null, "retreat")}>retreat</a></li>
          <li><a onClick={this.props.switchPane.bind(null, "electra")}>electra</a></li>
        </ul>
      );
  },

  render: function() {
    return (
      <header>
        <nav className="group header-nav">
          <h1 className="logo"><a onClick={this.props.switchPane.bind(null, "home")}>two headed rep</a></h1>
          <p className="tagline">creating a new canon</p>
          <ul className="nav-links group">
            <li key={"about"}
                className="dropdown-parent">
                <a>about</a>
                {this.aboutDropdown()}
            </li>
            <li key={"shows"}
                className="dropdown-parent">
                <a>shows</a>
                {this.showDropdown()}
            </li>
            <li key={"contact"}><a onClick={this.props.switchPane.bind(null, "contact")}>contact</a></li>
            <li key={"donate"}><a onClick={this.props.switchPane.bind(null, "donate")}>donate</a></li>
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
