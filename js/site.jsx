// REACT
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');

// COMPONENTS
var Header = require('./header.jsx');
var Home = require('./home.jsx');
var Footer = require('./footer.jsx');

// NAVIGATION
var About = require('./about.jsx');
var Shows = require('./shows.jsx');
var Contact = require('./contact.jsx');
var Donate = require('./donate.jsx');
var Blog = require('./blog.jsx');

// TEMPORARY
var Tickets = require('./tickets.jsx');

// FESTIVALS
var RetreatElectra = require('./shows/retreat_electra.jsx');
var DMYCTartuffe = require('./shows/dmyc_tartuffe.jsx');
var RestaurantLysistrata = require('./shows/restaurant_lysistrata.jsx');
var RenoMollMissJulie = require('./shows/rm_mj.jsx');

// PLAYS
var Electra = require('./shows/electra.jsx');
var Retreat = require('./shows/retreat.jsx');
var DMYC = require('./shows/dmyc.jsx');
var Tartuffe = require('./shows/tartuffe.jsx');
var Lysistrata = require('./shows/lysistrata.jsx');
var Restaurant = require('./shows/restaurant.jsx');
var Reno = require('./shows/rm.jsx');

// ROUTING
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

var Site = React.createClass({

  render: function () {
    return (
      <div className="site">
        <Header activeTab={this.props.location.pathname.slice(1)}/>
        { this.props.children }
        <Footer/>
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
        <Route path="shows" component={Shows}/>
        <Route path="contact" component={Contact}/>
        <Route path="donate" component={Donate}/>
        <Route path="retreat_electra" component={RetreatElectra}/>
        <Route path="dmyc_tartuffe" component={DMYCTartuffe}/>
        <Route path="restaurant_lysistrata" component={RestaurantLysistrata}/>
        <Route path="rm_mj" component={RenoMollMissJulie}/>
        <Route path="retreat" component={Retreat}/>
        <Route path="electra" component={Electra}/>
        <Route path="dmyc" component={DMYC}/>
        <Route path="tartuffe" component={Tartuffe}/>
        <Route path="lysistrata" component={Lysistrata}/>
        <Route path="reno_and_moll" component={Reno}/>
        <Route path="restaurant" component={Restaurant}/>
        <Route path="tickets" component={Tickets}/>
      </Route>
    </Router>
  );
  ReactDOM.render(router, document.getElementById("content"));
});
