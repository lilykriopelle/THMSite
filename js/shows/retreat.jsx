var React = require('react');
var Carousel = require('../carousel.jsx');

var Retreat = React.createClass({

  photoNames: function (play) {
    var photoNames = [];
    for (var i = 1; i <= 10; i++) {
      photoNames.push("images/retreat_images/" + play + i + ".jpg");
    }
    return photoNames;
  },

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>RETREAT</h1>
              <h2 style={{fontWeight: "400"}}>by Amanda Keating</h2>
              <h2 style={{fontWeight: "400"}}>directed by Molly Clifford</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting and Costume Design by Cheyenne Sykes</p>
              <p>Sound Design by Valentine Monfeuga</p>
              <p>Photos by Molly Clifford</p>
            </div>
          </div>
          <div className="credits" style={{textAlign: "center"}}>
            Featuring Caitlin Morris, Lizzie Fox, Bonnie Antosh, Ned Riseley and Max Reinhardsen.
          </div>
          <Carousel className="retreat-carousel" items={this.photoNames("retreat")}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
