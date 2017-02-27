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
            Two Headed Rep produces new plays in repertory with the classic plays that inspire them.  By creating a space in which old and the new exist side by side, we provide our audience with a living, breathing artistic and cultural context for the works we present. We embrace the repertory format as a means to enrich the audience experience of the old and the new, and foster an enhanced understanding of the relevance and necessity of each.
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
                Molly Clifford is a New York based director focused on new works.  She attended Connecticut College and the National Theater Institute at the Eugene O’Neill Theater Center.  NYC Directing: UglyRhino Productions, RAL Productions, the New York Musical Theater Festival, All For One and the world premiere of Anna Fox’s The Elephant in the Room (NY Fringe). Assisting: Classic Stage, Playwrights Realm, Berkshire Theater Group, Heartbeat Opera, The Play Company, Vineyard Theatre, Cherry Lane and Yale Rep.  Molly is currently developing Soldier with All For One Theater Company and Amanda Keating's GO THAT WAY.
              </span>

              <span className="person">
                <h2>Lily Riopelle – Co-Artistic Director</h2>
                Lily is a director and producer originally from and currently based in NYC. Her directorial credits range from site-specific reimaginings of canonical texts to developmental readings and first productions of new plays. As an assistant director, Lily has worked with many companies in and around NYC, most recently as a member of the Williamstown Theatre Festival's Directing Corps. She is a proud alumna of the National Theatre Institute's Advanced Directing Program and of Williams College, where she studied Theatre and Computer Science.
              </span>
            </div>
            <div className = "group" style={{marginTop: 20}}>
              <span className="person">
                <h2>Amanda Keating – Literary Manager</h2>
                Amanda Keating is a playwright. Her plays include RETREAT (Ensemble Studio Theatre, Two Headed Rep), TARTUFFE, a new translation (Two Headed Rep), GO THAT WAY (Williams College Summer Theatre Lab),  and ROAST (The Plowmen). She is a member of EST/Youngblood, and her work has been produced by EST, Serials @The Flea, Tiny Rhino, and Rule of 7x7. Amanda is from Western Massachusetts and lives in Brooklyn.
              </span>

              <span className="person">
                <h2>Katie Falter – Associate Producer</h2>
                Katie Falter is a NYC based director and producer from the Buckeye State. She directed and produced the FringeFAVE run of The Starter by Sean Murphy at the 2015 New York International Fringe Festival. Favorite credits include Broadway: ALLEGIANCE. National Tour: Disney's Beauty and the Beast. NYC: RETREAT/Electra (Two Headed Rep), Animals Out of Paper (YOLO! Productions), BOHEMIAN LIGHTS (LiveSource), Danny and the Deep Blue Sea (YOLO! Productions), and Mother Jones and the Children's Crusade (NYMF). She is also the Associate Producer for the upcoming web series Keep Me Posted. Proud alum of Otterbein University.
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = About;
