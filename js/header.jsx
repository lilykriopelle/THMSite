var React = require('react');

var Header = React.createClass({

  getInitialState: function () {
    return { dropdown: false };
  },

  displayDropdown: function () {
    this.setState({ dropdown: true });
  },

  hideDropdown: function () {
    this.setState({ dropdown: false });
  },

  render: function() {
    var dropdown = "";
    if (this.state.dropdown) {
      dropdown = (
        <ul className="dropdown">
          <li><a onClick={this.props.switchPane.bind(null, "company")}>company</a></li>
          <li><a onClick={this.props.switchPane.bind(null, "team")}>team</a></li>
        </ul>
      );
    }
    // <li key={"upcoming"}><a onClick={this.props.switchPane.bind(null, "upcoming")}>upcoming</a></li>
    // <li key={"donate"}><a onClick={this.props.switchPane.bind(null, "donate")}>donate</a></li>
    return (
      <header>
        <nav className="group header-nav">
          <h1 className="logo"><a onClick={this.props.switchPane.bind(null, "home")}>two headed monster</a></h1>
          <ul className="nav-links group">
            <li key={"upcoming"}><a onClick={this.props.switchPane.bind(null, "upcoming")}>upcoming</a></li>
            <li key={"about"}
                className="dropdown-parent"
                onMouseEnter={this.displayDropdown}
                onMouseLeave={this.hideDropdown}>
                <a>about</a>
                {dropdown}
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
