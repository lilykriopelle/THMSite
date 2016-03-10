var React = require('react');

var Company = React.createClass({

  render: function () {
    return (
      <main className="about group">
        <section className="mission">
          <h1>Mission</h1>
          <p>
            Two Headed Monster curates strategic pairings of new and canonical plays and produces them in repertory.

            We commit to a deep exploration of the points of connection between the works we present, as well as a meaningful investigation of their differences.

            We open a dialogue between old and new, and invite our audiences and fellow artists to participate.
          </p>
        </section>

        <section>
            <h1>How It Works</h1>
            <p>
              It starts with the plays.  We might fall in love with a playwright, and commission them to write something in response to a play that resonates with them. We might choose a classic piece and then ask a playwright to write something to pair with it.  Maybe we come across a new play we adore, and can't shake the feeling that it has something new to say about a canonical piece.  Whatever the process, the result is the same: a pair of stellar plays.
            </p>

            <p>
              The next phase is discovery.  As we dive in to working on each play as its own entity, we ask: what do we learn about these plays when we place them side by side that we might never have noticed doing each of them alone?  What conversation do the plays seem to be having?  In the space between the two pieces, we start to see a constellation form.
            </p>

            <p>
              The last phase is dialogue with other artists and with our audience.  We invite artists working in many disciplines to participate in our repertory festivals, contributing to the conversation between our plays with works that illuminate, question, complicate, or celebrate the connection that the plays share.  Admission to all of these events is included in the price of a repertory ticket.  We want our audiences to stay a while, and join the conversation.
            </p>
        </section>
      </main>
    );
  }

});

module.exports = Company;
