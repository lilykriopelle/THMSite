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
            Two Headed Rep curates strategic pairings of new and canonical plays and produces them in repertory. We commit to a deep exploration of the points of connection between the works we present, as well as a meaningful investigation of their differences. We open a dialogue between old and new, and invite our audiences and fellow artists to participate.
          </p>
        </section>
        <section>
          <h1 onClick={function() {this.setState({how: !this.state.how});}.bind(this)}>HOW WE DO IT</h1>
          <div className={this.state.how ? "" : "invisible"}>
            <p>
              It starts with the plays. We might fall in love with a playwright, and commission them to write something in response to a play that resonates with them. We might choose a classic piece and then ask a playwright to write something to pair with it. Maybe we come across a new play we adore, and can't shake the feeling that it has something new to say about a canonical piece. Whatever the process, the result is the same: a pair of stellar plays.
            </p>

            <p>
              The next phase is discovery. As we dive in to working on each play as its own entity, we ask: what do we learn about these plays when we place them side by side that we might never have noticed doing each of them alone? What conversation do the plays seem to be having? In the space between the two pieces, we start to see a constellation form.
            </p>

            <p>
              The last phase is dialogue with other artists and with our audience. We invite artists working in many disciplines to participate in our repertory festivals, contributing to the conversation between our plays with works that illuminate, question, complicate, or celebrate the connection that the plays share. Admission to all of these events is included in the price of a repertory ticket. We want our audiences to stay a while, and join the conversation.
            </p>
          </div>
        </section>
        <section>
          <h1 onClick={function() {this.setState({who: !this.state.who});}.bind(this)}>WHO WE ARE</h1>
          <div className={"group " + (this.state.who ? "" : "invisible")}>
            <span className="person">
              <h2>Molly Clifford</h2>
              Molly Clifford is a New York based director focused on new works.  She attended Connecticut College and the National Theater Institute at the Eugene O’Neill Theater Center.  NYC Directing: UglyRhino Productions, RAL Productions, the New York Musical Theater Festival, All For One and the world premiere of Anna Fox’s The Elephant in the Room (NY Fringe). Assisting: Classic Stage, Playwrights Realm, Berkshire Theater Group, Heartbeat Opera, The Play Company, Vineyard Theatre, Cherry Lane and Yale Rep.  Molly is currently developing Soldier with All For One Theater Company and Amanda Keating's GO THAT WAY.
            </span>

            <span className="person">
              <h2>Lily Riopelle</h2>
              Lily is a director and producer originally from and currently based in NYC. Her directorial credits range from site-specific reimaginings of canonical texts to developmental readings and first productions of new plays. Recent NYC credits include work with Tiny Rhino and Sanguine Theatre Company. As an assistant director, Lily has worked with companies including Woodshed Collective, 2g, and Superhero Clubhouse. She is a proud alumna of the National Theatre Institute's Advanced Directing Program and of Williams College.  She is currently developing Lizzie Stern's LET'S GET READY TOGETHER.
            </span>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = About;
