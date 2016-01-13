var React = require('react');
var TicketLink = require('./ticket_link.jsx');

var Upcoming = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section className="main-header">
          <h1>WE ARE DOING A REP THING!!!</h1>
          <h2>Dates/Location/Whatevs</h2>
          <TicketLink/>
        </section>

        <section>
          <h1>The New Play</h1>
          <h2>by Amanda Keating</h2>
          <h2>directed by Molly Clifford</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section>
          <h1>The Old Play</h1>
          <h2>by Somebody Else</h2>
          <h2>directed by Lily Riopelle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section>
          <h1>The Other Stuff</h1>
          <ul>
            <li>Some Music happening at a time</li>
            <li>A Talkback happening at another time</li>
            <li>etc</li>
          </ul>
        </section>
      </main>
    );
  }

});

module.exports = Upcoming;
