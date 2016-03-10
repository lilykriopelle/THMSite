var React = require('react');

var Team = React.createClass({

  render: function () {
    return (
      <main className="about group">
        <section>
          <h1>Who We Are</h1>
          <div className="group">
            <section className="person">
              <h2>Molly Clifford</h2>
              Molly Clifford is a New York based director focused on new works.  She attended Connecticut College and the National Theater Institute at the Eugene O’Neill Theater Center.  NYC Directing: UglyRhino Productions, RAL Productions, the New York Musical Theater Festival, All For One and the world premiere of Anna Fox’s The Elephant in the Room (NY Fringe). Assisting: Classic Stage, Playwrights Realm, Berkshire Theater Group, Heartbeat Opera, The Play Company, Vineyard Theatre, Cherry Lane and Yale Rep.  Molly is currently developing Soldier with All For One Theater Company and Amanda Keating's GO THAT WAY.
            </section>

            <section className="person">
              <h2>Lily Riopelle</h2>
              Lily is a director and producer originally from and currently based in NYC. Her directorial credits range from site-specific reimaginings of canonical texts to developmental readings and first productions of new plays. Recent NYC credits include work with Tiny Rhino and Sanguine Theatre Company. As an assistant director, Lily has worked with companies including Woodshed Collective, 2g, and Superhero Clubhouse. She is a proud alumna of the National Theatre Institute's Advanced Directing Program and of Williams College.  She is currently developing Lizzie Stern's LET'S GET READY TOGETHER.
            </section>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = Team;
