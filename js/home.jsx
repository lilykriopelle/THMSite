var React = require('react');
var TicketLink = require('./ticket_link.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <main className="group">
        <section className="front-page">
          <h1>Two Headed Monster</h1>
          <h2>rears its ugly heads</h2>

          <p>
            April 1-3
            <br/>
            The Gallery at Access Theater
          </p>

          <p>
            featuring works by
            <br/>
            Amanda Keating
            <br/>
            and Sophocles
          </p>
          <p>
            Come eat, drink, and discuss.
          </p>
        </section>
      </main>
    );
  }

});

module.exports = Home;
