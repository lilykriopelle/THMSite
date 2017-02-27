var React = require('react');
var Gallery = require('../carousel.jsx');

var Electra = React.createClass({

  PHOTOSET: [
    {
      src: "images/electra_images/electra1.jpg",
      width: 400,
      height: 400,
      aspectRatio: 1,
      lightboxImage: {
        src: "images/electra_images/electra1.jpg"
      }
    },
    {
      src: "images/electra_images/electra2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra2.jpg"
      }
    },
    {
      src: "images/electra_images/electra3.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/electra_images/electra3.jpg"
      }
    },
    {
      src: "images/electra_images/electra4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra4.jpg"
      }
    },
    {
      src: "images/electra_images/electra5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra5.jpg"
      }
    },
    {
      src: "images/electra_images/electra5.5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra5.5.jpg"
      }
    },
    {
      src: "images/electra_images/electra6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra6.jpg"
      }
    },
    {
      src: "images/electra_images/electra7.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/electra_images/electra7.jpg"
      }
    },
    {
      src: "images/electra_images/electra8.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/electra_images/electra8.jpg"
      }
    },
    {
      src: "images/electra_images/electra9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/electra_images/electra9.jpg"
      }
    }
  ],

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
          <Gallery className="electra-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Electra;
