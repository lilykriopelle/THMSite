var React = require('react');

var About = React.createClass({

  getInitialState: function () {
    return {
      what: false,
      how: false,
      who: false
    }
  },

  render: function() {
    return (
      <main className="about">
        <section>
          <h1 onClick={function() {this.setState({what: !this.state.what});}.bind(this)}>WHAT WE DO</h1>
          <p className={this.state.what ? "" : "invisible"}>
            Two Headed Rep produces new and classic plays in repertory. We create adaptations of classics that are politically responsible as well as fun, and commission new work, inspired by these classics, from playwrights whose perspectives have historically been excluded from the theatrical canon. By inviting a spectrum of diverse responses to the classics, we create a more equitable, inclusive, and innovative canon for future generations to inherit.
          </p>
        </section>
        <section>
          <h1 onClick={function() {this.setState({how: !this.state.how});}.bind(this)}>HOW WE DO IT</h1>
          <div className={this.state.how ? "" : "invisible"}>
            <p>
              First, we pick an old play.  We aim to reinvigorate canonical works by illuminating their relevance to the current cultural and political moment.
            </p>
            <p>
              Second, we commission a playwright to write a new play in response to the old play.  We seek out emerging writers who belong to communities that have historically been excluded from the theatrical canon - women, people of color, and queer artists - in order to give voice to populations that are underrepresented within the theatrical ecosystem.
            </p>
            <p>
              Third, we produce both plays in rep.
            </p>
            <p>
              As we begin working on each play we ask: what do we learn about these plays when we place them side by side that we might never have noticed doing each of them alone?
            </p>
            <p>
              Finally, we open a dialogue with other artists and with our audience about the conversation our plays seem to be having with with one another. We invite artists working in many disciplines to participate in our repertory festivals by contributing to works that illuminate, question, complicate, or celebrate the connection that the plays share. Admission to all of these events is included in the price of a repertory ticket. We want our audiences to stay a while, and join the conversation.
            </p>
          </div>
        </section>
        <section>
          <h1 onClick={function() {this.setState({who: !this.state.who});}.bind(this)}>WHO WE ARE</h1>
          <div className={(this.state.who ? "" : "invisible")}>
            <div className = "group">
              <span className="person">
                <h2>Molly Clifford – Co-Artistic Director</h2>
                NYC Directing: TARTUFFE (Two Headed Rep), RETREAT (Two Headed Rep, EST/Youngblood), Soldier (All For One), The Elephant in the Room (NY Fringe).  Short plays and readings with EST/Youngblood, TinyRhino, 7x7. Assisting: Classic Stage, Playwrights Realm, The Play Company, Vineyard Theatre, EST, Cherry Lane and Yale Rep.  Alumna of the National Theater Institute and Connecticut College.
              </span>

              <span className="person">
                <h2>Lily Riopelle – Co-Artistic Director</h2>
                Lily is a director and producer originally from and currently based in NYC. She has directed and assisted in NYC at institutions including Two Headed Rep, The Tank, Youngblood/EST, UglyRhino/TinyRhino, and Woodshed Collective, and regionally at the Williamstown Theatre Festival. She studied Theatre and Computer Science at Williams College, and is an alumna of the National Theatre Institute's Advanced Directing Program.
              </span>
            </div>
            <div className = "group" style={{marginTop: 20}}>
              <span className="person">
                <h2>Amanda Keating – Literary Manager</h2>
                Amanda Keating is a playwright. Her plays include RETREAT (Ensemble Studio Theatre, Two Headed Rep), TARTUFFE, a new translation (Two Headed Rep), GO THAT WAY (Williams College Summer Theatre Lab),  and ROAST (The Plowmen). She is a member of EST/Youngblood, and her work has been produced by EST, Serials @The Flea, Tiny Rhino, and Rule of 7x7. Amanda is from Western Massachusetts and lives in Brooklyn.
              </span>

              <span className="person">
                <h2>Maya Davis – Artistic Associate</h2>
                Maya Davis is a NYC-based director and producer originally from DC. She has directed, assisted, and produced in NYC at institutions including The Flea, The Public Theater, The Drawing Center, and Fordham Theatre Program, and regionally at Williamstown Theatre Festival and The Big Sky Theatre Company. Alumna of Fordham University. 
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = About;
