var React = require('react');
var Gallery = require('../carousel.jsx');

var Lysistrata = React.createClass({

  PHOTOSET: [
    {
      src: "images/lysistrata_images/lysistrata1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata1.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata2.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata3.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata3.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata4.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata5.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata6.jpg",
      width: 300,
      height: 450,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata6.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata7.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata8.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata9.jpg"
      }
    },
    {
      src: "images/lysistrata_images/lysistrata10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/lysistrata_images/lysistrata10.jpg"
      }
    }
  ],

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>Aristophanes' Lysistrata</h1>
              <h2 style={{fontWeight: "400"}}>adapted and directed by Lily Riopelle</h2>
              <h2 style={{fontWeight: "400"}}>with songs by Cody Owen Stine</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Sound Design by Carsen Joenk</p>
              <p>Assistant Directed and Stage Managed by Helen Handelman</p>
              <p>Photos by Ashley Garrett</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            Fed up with a war that's tearing her world apart, Lysistrata leads the women of Greece in a rebellion against the status quo. Or at least, she will lead the women of Greece in a rebellion against the status quo just as soon as they show up to the meeting she worked super hard to organize (seriously, she's not messing around, she even brought snacks). Now if they'd just stop their chit-chatting so she can reveal her grand plan...
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Lysistrata ........................................................................ Lizzie Fox </div>
              <div> Calonice ........................................................... Lizzie King-Hall* </div>
              <div> Mhyrrine ............................................................ Rachel B. Joyce </div>
              <div> Ismenia ................................................................... Tina Scariano* </div>
              <div> Kallyki ................................................................... Lydian Blossom </div>
              <div> Lampito .................................................... Christina D. Eskridge </div>
              <div> Kinesias ............................................................... Kristian Espiritu* </div>
            </div>
          </div>

          <Gallery className="lysistrata-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Lysistrata;
