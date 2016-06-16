var React = require('react');

var Tickets = React.createClass({

  componentDidMount: function () {
    artfully.widgets.event().display("8319");
  },

  render: function () {
    return (
      <main>
        <div>
          <p>
            Buy tickets to our inaugural rep of RETREAT/Electra!
            Your ticket also grants you access to the other events
            we are producing that weekend.
          </p>
          <div id='artfully-event'></div>

          <div>
            (If the ticketing widget is giving you trouble, you can purchase tickets directly <a href="https://www.artful.ly/store/events/8319">here</a>.)
          </div>
        </div>
      </main>
    );
  }

});

module.exports = Tickets;
