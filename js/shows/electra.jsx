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
              <p>Assistant Directed by Katie Falter</p>
              <p>Photos by Molly Clifford</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            Electra mourns the death of her father, murdered by her mother in the ultimate act of betrayal.  When her brother Orestes returns to avenge their father, the siblings take justice into their own hands.  A brand new adaptation of Sophocles' timeless story of revenge, this Electra asks us whether blood can ever really repay blood.
          </div>
          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Electra ....................................................................... Sarah Chalfie </div>
              <div> Chrysothemis ........................................................ Emma Orme </div>
              <div> Clytemnestra ........................................................... Natalie Rich </div>
              <div> Orestes ................................................................................ Leon Axt </div>
              <div> Paedagogus/Aegisthus .................. Zach Fike Hodges </div>
              <div> Pylades .........................................................  Matthew Tiemstra </div>
            </div>
          </div>
          <Carousel className="electra-carousel" items={this.photoNames("electra")}/>
        </section>
      </main>
    );
  }

});

module.exports = Electra;
