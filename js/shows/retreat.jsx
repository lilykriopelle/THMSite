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
              <p>Assistant Directed by Katie Falter</p>
              <p>Photos by Molly Clifford</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            23 writers (Susan and Barry couldn’t come) settle in for a weekend by the sea.  They expect walks on the beach, breakfast tacos, board games, and late nights in the hot tub, but on this unseasonably warm winter weekend they find something else.  You might say they’re boring (they’re not), and they might say they’re just trying to figure shit out, but anyone who really knows them would say they believe in bold choices and doing what they want.
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Jan ........................................................................ Caitlin Morris </div>
              <div> Nate ....................................................................... Ned Riseley </div>
              <div> Amy ............................................................................. Lizzie Fox </div>
              <div> Beth .................................................................. Bonnie Antosh </div>
              <div> Gary ............................................................ Max Reinhardsen </div>
            </div>
          </div>

          <Carousel className="retreat-carousel" items={this.photoNames("retreat")}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
