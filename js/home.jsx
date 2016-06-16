var React = require('react');
var TicketLink = require('./ticket_link.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <main className="group">
        <section className="front-page">
          <img src="images/retreat_electra_collage.jpg"/>
        </section>
      </main>
    );
  }

});

module.exports = Home;
