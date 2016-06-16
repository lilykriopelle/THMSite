var React = require('react');
var Carousel = require('./carousel.jsx');

var Shows = React.createClass({

  photoNames: function (play) {
    var photoNames = [];
    for (var i = 1; i <= 10; i++) {
      photoNames.push("images/" + play + "_images/" + i + ".png");
    }
    return photoNames;
  },

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="credits">
            <h1>RETREAT</h1>
            <h2>by Amanda Keating</h2>
            <h2>directed by Molly Clifford</h2>
          </div>
          <Carousel items={this.photoNames("retreat")}/>
        </section>

        <section className="show-details">
          <div className="credits">
            <h1>Electra</h1>
            <h2>by Sophcoles</h2>
            <h2>adapted and directed by Lily Riopelle</h2>
            <h2>with music by Frankie Simms</h2>
          </div>
          <Carousel items={this.photoNames("electra")}/>
        </section>
      </main>
    );
  }

});

module.exports = Shows;
