var React = require('react');
var Carousel = require('../carousel.jsx');

var Electra = React.createClass({

  photoNames: function (play) {
    var photoNames = [];
    for (var i = 1; i <= 10; i++) {
      photoNames.push("images/electra_images/" + play + i + ".jpeg");
    }
    return photoNames;
  },

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>Electra</h1>
              <h2 style={{fontWeight: "400"}}>by Sophocles</h2>
              <h2 style={{fontWeight: "400"}}>adapted and directed by Lily Riopelle</h2>
              <h2 style={{fontWeight: "400"}}>with music by Frankie Simms</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting and Costume Design by Cheyenne Sykes</p>
              <p>Sound Design by Valentine Monfeuga</p>
              <p>Photos by Molly Clifford</p>
            </div>
          </div>
          <div className="credits" style={{textAlign: "center"}}>
            Featuring Sarah Chalfie, Emma Orme, Natalie Rich, Leon Axt, Zach Fike Hodges, and Matthew Tiemstra.          </div>
          <Carousel className="electra-carousel" items={this.photoNames("electra")}/>
        </section>
      </main>
    );
  }

});

module.exports = Electra;
