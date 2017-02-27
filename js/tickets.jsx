var React = require('react');

var Tickets = React.createClass({

  componentDidMount: function () {
    artfully.widgets.event().display("8319");
  },

  render: function () {
    return (
      <main>
        <div>
          <p className="centered" style={{fontSize: 60}}><a className="highlight-link" target="_blank" href="https://www.artful.ly/two-headed-monster">click here to buy tickets</a></p>
          <p className="centered" style={{fontSize: 35}}>to Don't Make Yourself Crazy/TARTUFFE!</p>
        </div>
      </main>
    );
  }

});

module.exports = Tickets;
