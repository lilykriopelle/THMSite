// REACT
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');

// COMPONENTS
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
var Upcoming = require('./upcoming.jsx');
var Company = require('./company.jsx');
var Team = require('./team.jsx');
var Contact = require('./contact.jsx');
var Donate = require('./donate.jsx');
var Tickets = require('./tickets.jsx');
var Electra = require('./shows/electra.jsx');
var Retreat = require('./shows/retreat.jsx');
var Friends = require('./friends.jsx');
var About = require('./about.jsx');
var Shows = require('./shows.jsx');
var RetreatElectra = require('./shows/retreat_electra.jsx');
var UntitledTartuffe = require('./shows/untitled_tartuffe.jsx');

// ROUTING
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

var Site = React.createClass({

  render: function () {
    return (
      <div className="site">
        <Header/>
        { this.props.children }
      </div>
    );
  }

});

$(function() {
  var router = (
    <Router history={browserHistory}>
      <Route path="/" component={Site}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="festivals" component={Shows}/>
        <Route path="contact" component={Contact}/>
        <Route path="donate" component={Donate}/>
        <Route path="retreat_electra" component={RetreatElectra}/>
        <Route path="untitled_tartuffe" component={UntitledTartuffe}/>
        <Route path="retreat" component={Retreat}/>
        <Route path="electra" component={Electra}/>
      </Route>
    </Router>
  );
  ReactDOM.render(router, document.getElementById("content"));
});
