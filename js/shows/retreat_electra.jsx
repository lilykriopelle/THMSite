var React = require('react');
var ShowPreview = require('../show_preview');

var RetreatElectra = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>RETREAT</div>
              <div>by Amanda Keating</div>
              <div>directed by Molly Clifford</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div style={{fontWeight: "bold"}}>Electra</div>
              <div>by Sophocles</div>
              <div>directed and adapted by Lily Riopelle</div>
              <div>with music by Frankie Simms</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">April 1-3, 2016</div>
            <div className="centered">The Gallery at Access Theater</div>
          </div>


          <p>
            As young people, many of us remain unscathed by loss.  Hardship we know how to contend with, but the question of how to grieve well or correctly seems to be without answer.  Books, articles, theologies, neighbors, random strangers at bars all have their own version of “right” – but is there really a “right” way to mourn?
          </p>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="RETREAT" imageUrl="images/retreat_images/retreat7.jpg" link="/retreat"/>
            <ShowPreview classes={["float-right"]} title="ELECTRA" imageUrl="images/electra_images/electra10.jpeg" link="/electra"/>
          </div>

          <p>
            In these plays, we find two very different young women in two very different times and places contending with grief.  One has lost a father, the other a mother, and both their worlds have crumbled around them.  With no sure footing and no straight path, these two women try to find a way forward.
          </p>
        </section>
      </main>
    );
  }

});

module.exports = RetreatElectra;
