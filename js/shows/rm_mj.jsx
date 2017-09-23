var React = require('react');
var ShowPreview = require('../show_preview');

var RestaurantLysistrata = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Reno & Moll</div>
              <div>by Emma Horwitz</div>
              <div>directed by Lily Riopelle</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div>August Strindberg's <span style={{fontWeight: "bold"}}>Miss Julie</span></div>
              <div>adapted by Brittany Allen, Will Arbery, and Amanda Keating</div>
              <div>directed by Molly Clifford</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">November 4-18, 2017</div>
            <div className="centered">The Workshop Theater's Jewel Box Theater</div>
          </div>

          <div className="centered" style={{marginTop: 20}}>
            This fall, Two Headed Rep’s pairing of plays find themselves in the workplace, inhabited by people who, every day, confront, consider, and carry out what’s expected of them. What weighs on us when we’re expected to do everything? What about when nothing is expected of us? And what do we do about the dog? Two Headed Rep asks these questions and more with their fall rep: a new adaptation of Miss Julie by Brittany Allen, Will Arbery, and Amanda Keating, and Reno & Moll, a new play written in response to Strindberg’s classic by Emma Horwitz.
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
