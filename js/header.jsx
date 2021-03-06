var React = require('react');

var Header = React.createClass({
  highlightClass: function (tabName) {
    return (tabName === this.props.activeTab) ? "highlight" : "";
  },
  render: function() {
    // <h1 className="logo"><a href="/">two headed rep</a></h1>
    return (
      <header>
        <nav className="group header-nav">
          <div className="clearfix flex align-center">
            <a href="/">
              <img style={{width: 200}} className="left" src="images/logo.png"/>
            </a>
          </div>
          <ul className="nav-links group" style={{display: 'flex', justifyContent: 'center'}}>
            <li><a className={this.highlightClass("about")} href="/about">about</a></li>
            <li><a className={this.highlightClass("shows")} href="/shows">shows</a></li>
            <li><a className={this.highlightClass("contact")} href="/contact">contact</a></li>
            <li><a className={this.highlightClass("donate")} href="/donate">donate</a></li>
            <li><a className={this.highlightClass("blog")} target="_blank" href="http://blog.twoheadedrep.com">the archive</a></li>
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
