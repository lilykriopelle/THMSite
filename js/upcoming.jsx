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
            23 writers (Susan and Barry couldn’t come) settle in for a weekend by the sea.  They expect walks on the beach, breakfast tacos, board games, and late nights in the hot tub, but on this unseasonably warm winter weekend they find something else.  You might say they’re boring (they’re not), and they might say they’re just trying to figure shit out, but anyone who really knows them would say they believe in bold choices and doing what they want.
          </p>
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
            Electra mourns the death of her father, murdered by her mother in the ultimate act of betrayal.  When her brother Orestes returns to avenge their father, the siblings take justice into their own hands.  A brand new adaptation of Sophocles' timeless story of revenge, this Electra asks us whether blood can ever really repay blood.
          </p>
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
                Saturday, April 2 @ 2:00PM
                <br/>
                <span style={{fontStyle: "italic"}}>
                  In The Room
                </span>
                <br/>
                written by Lawrence Dial, directed by Adam Knight
              </p>
              <br/>
              <span>Reserve tickets <a href="https://www.artful.ly/store/events/8907">here</a> .</span>
            </li>
            <li>
              <p>
                Sunday, April 3 @ 12:30PM
                <br/>
                <span style={{fontStyle: "italic"}}>
                  All Hallows Eve At the Amarillo Jehovah’s Witness Weekly Grief Group In the Backroom of the Y Just Off the Feeder
                </span>
                <br/>
                written by Molly Beach Murphy, directed by Nikki DiLoreto
                <br/>
                <span style={{fontStyle: "italic"}}>
                  You Get a Car
                </span>
                <br/>
                written by Emma Horowitz, directed by Hannah Greene
              </p>
              <br/>
              <span>Reserve tickets <a href="https://www.artful.ly/store/events/8782">here</a> .</span>
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
