var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
var Upcoming = require('./upcoming.jsx');
var About = require('./about.jsx');
var Contact = require('./contact.jsx');
var Donate = require('./donate.jsx');


var Site = React.createClass({
  // contentPanes: [<Home/>, <Upcoming/>, <About/>, <Contact/>, <Donate/>],

  contentPanes: [<Home/>, <Upcoming/>, <About/>, <Contact/>, <Donate/>],

  getInitialState: function () {
    return { activePaneIdx: 0 };
  },

  _switchPane: function (idx) {
    this.setState({ activePaneIdx: idx });
  },

  render: function () {
    return (
      <div>
        <Header switchPane={ this._switchPane }/>
        { this.contentPanes[this.state.activePaneIdx] }
        <Footer/>
      </div>
    );
  }

});

$(function() {
  ReactDOM.render(<Site/>, document.getElementById("content"));
});
