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
var Tickets = require('./tickets.jsx');
var Shows = require('./shows.jsx');
var Electra = require('./shows/electra.jsx');
var Retreat = require('./shows/retreat.jsx');
var Friends = require('./friends.jsx');

var Site = React.createClass({

  getInitialState: function () {
    return { activePane: "home", display: false  };
  },

  _switchPane: function (pane) {
    this.setState({ activePane: pane });
  },

  contentPanes: {
    home: <Home/>,
    upcoming: <Upcoming/>,
    donate: <Donate/>,
    contact: <Contact/>,
    company: <Company/>,
    team: <Team/>,
    shows: <Shows/>,
    electra: <Electra/>,
    retreat: <Retreat/>,
    // friends: <Friends/>
  },

  _toggleDisplay: function () {
    this.setState({display: !this.state.display});
  },

  render: function () {
    return (
      <div className="site">
        <Header switchPane={ this._switchPane } toggleDisplay={this._toggleDisplay}/>
        { this.contentPanes[this.state.activePane] }
      </div>
    );
  }

});

$(function() {
  ReactDOM.render(<Site/>, document.getElementById("content"));
});
