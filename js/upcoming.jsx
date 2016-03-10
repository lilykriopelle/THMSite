var React = require('react');
var TicketLink = require('./ticket_link.jsx');

var Upcoming = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section className="main-header">
          <h1>RETREAT/Electra</h1>
          <h2>April 1-3, 2016</h2>
          <h2>The Gallery at Access Theatre</h2>
          <h2>380 Broadway</h2>
        </section>

        <section>
          <h1>RETREAT</h1>
          <h2>by Amanda Keating</h2>
          <h2>directed by Molly Clifford</h2>
          <p>
            Featuring Caitlin Morris, Lizzie Fox, Bonnie Antosh, Ned Riseley and Max Reinhardsen.
          </p>
        </section>

        <section>
          <h1>Electra</h1>
          <h2>by Sophocles</h2>
          <h2>adapted and directed by Lily Riopelle</h2>
          <h2>with music by Frankie Simms</h2>
          <p>
            Featuring Sarah Chalfie, Emma Orme, Natalie Rich, Leon Axt, Zach Fike Hodges, and Matthew Tiemstra.
          </p>
        </section>

        <ul className="designers">
          <li>Set Design: Cate McCrea</li>
          <li>Light and Costume Design: Cheyenne Sykes</li>
          <li>Sound Design: Val Monfeuga</li>
          <li>Assistant Director: Katie Falter</li>
        </ul>

        <section className="events">
          <h1>Other Events</h1>
          <ul>
            <li>
              <p>
                Sunday, April 3 @ 12:30PM
                <br/>
                <span style={{fontStyle: "italic"}}>
                  All Hallows Eve At the Amarillo Jehovah’s Witness Weekly Grief Group In the Backroom of the Y Just Off the Feeder
                </span>
                <br/>
                written by Molly Beach Murphy, directed by Nikki DiLoreto
              </p>
            </li>
            <li>
              Sunday, April 3 @ 7:30PM
              <br/>
              PARTY at Access! Stay tuned for details.
            </li>
          </ul>
        </section>
      </main>
    );
  }

});

module.exports = Upcoming;
