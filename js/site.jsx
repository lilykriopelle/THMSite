var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
var Upcoming = require('./upcoming.jsx');
var Company = require('./company.jsx');
var Team = require('./team.jsx');
var Contact = require('./contact.jsx');
var Donate = require('./donate.jsx');

var Site = React.createClass({

  contentPanes: {
    home: <Home/>,
    upcoming: <Upcoming/>,
    donate: <Donate/>,
    contact: <Contact/>,
    company: <Company/>,
    team: <Team/>
  },

  getInitialState: function () {
    return { activePane: "home" };
  },

  _switchPane: function (pane) {
    this.setState({ activePane: pane });
  },

  render: function () {
    return (
      <div className="site">
        <Header switchPane={ this._switchPane }/>
        { this.contentPanes[this.state.activePane] }
        <Footer/>
      </div>
    );
  }

});

$(function() {
  ReactDOM.render(<Site/>, document.getElementById("content"));
});
