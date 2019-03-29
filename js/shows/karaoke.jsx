var React = require('react');
var Gallery = require('../carousel.jsx');

var Retreat = React.createClass({

  PHOTOSET: [
    {
      src: "images/karaoke_images/karaoke1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke1.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke2.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke3.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke3.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke4.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke5.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke6.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke7.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke8.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke8.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/karaoke_images/karaoke9.jpg"
      }
    },
    {
      src: "images/karaoke_images/karaoke10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/karaoke_images/karaoke10.jpg"
      }
    }
  ],

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30", width: 400}}>Karaoke at The Golden Sun Convention Center</h1>
              <h2 style={{fontWeight: "400"}}>by Jahna Ferron-Smith</h2>
              <h2 style={{fontWeight: "400"}}>directed by Molly Clifford</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Sound Design by Jessica Hart</p>
              <p>Photos by Ashley Garrett</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            This Merger is happening. Sandwiched between team building exercises and more team building exercises is a mandatory karaoke hour at The Golden Sun Convention Center where everyone has to sing for their job. While Lenny and Vince vamp onstage and Elena and Janet hide in Stairwell D, Big Boss Pete is in the back still working with the numbers and there’s not enough Svedka & OJ to assuage everyone’s existential panic: Who’s getting fired? Who’s staying hired? And which is worse? Don’t worry. No matter what happens, everyone gets tote bags, toothpicks, and a killer selection of midi files to take with them on the road to whatever comes next.
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              Featuring Molly Carden*, Quinn Franzen*, Michael Grew*, Ying Ying Li*, Charlie Tolan, and Akyiaa Wilson.
            </div>
          </div>

          <Gallery className="retreat-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
