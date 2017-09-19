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
            <div className="centered">November 4-May 18, 2017</div>
            <div className="centered">The Workshop Theater's Jewel Box Theater</div>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
