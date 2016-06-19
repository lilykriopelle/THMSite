var React = require('react');

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
            <div className="show-thumb float-left">
              <img src="images/retreat_images/retreat7.jpg"/>
              <a href="/retreat" className="overlay">
                <div style={{position: "absolute", bottom: 16, right: 20}}>
                  RETREAT
                </div>
              </a>
            </div>
            <div className="show-thumb float-right" >
              <img src="images/electra_images/electra10.jpeg"/>
              <a href="/electra" className="overlay">
                <div style={{position: "absolute", bottom: 16, right: 20}}>
                ELECTRA
                </div>
              </a>
            </div>
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
