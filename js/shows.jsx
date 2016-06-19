var React = require('react');

var Shows = React.createClass({

  render: function () {
    return (
      <main className="shows">
        <ul>
          <li>
            <a href="/retreat_electra">
              RETREAT/Electra – April 2016
            </a>
          </li>

          <li>
            <div style={{cursor: "default"}}>
              Untitled/Tartuffe – UPCOMING October 2016
            </div>
          </li>
        </ul>
      </main>
    );
  }

});

module.exports = Shows;
