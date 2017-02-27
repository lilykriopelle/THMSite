var React = require('react');
var Gallery = require('../carousel.jsx');

var DMYC = React.createClass({

  PHOTOSET: [
    {
      src: "images/dmyc_images/dmyc_1.jpg",
      width: 400,
      height: 400,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_1.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_2.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_3.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_3.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_4.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_5.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_6.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_7.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_8.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_8.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_9.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_9.jpg"
      }
    },
    {
      src: "images/dmyc_images/dmyc_10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/dmyc_images/dmyc_10.jpg"
      }
    }
  ],

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1>{"Don't Make Yourself Crazy"}</h1>
              <h2 style={{fontWeight: "400"}}>by Lizzie Stern</h2>
              <h2 style={{fontWeight: "400"}}>directed by Lily Riopelle</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Sound Design by Lawrence Schober</p>
              <p>Assistant Directed by Lizzie Kehoe</p>
              <p>Photos by Evan Zimmerman</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            On the border between Harlem and the Upper East side, two grandchildren of immigrants find themselves the last middle-class residents in their pre-war building. When a bigoted bro takes over, they must harness their grandparents’ will to fight back and protect their homes and histories.
          </div>
          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Clara ....................................................................... Sarah Chalfie </div>
              <div> Eloise ........................................................ Charlotte Otremba </div>
              <div> Chris ............................................................................ James Ross </div>
              <div> Bryson ............................................................................ Paul Karle </div>
              <div> Omi ...................................................................... Vickie Varnuska </div>
            </div>
          </div>
          <Gallery className="dmyc-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = DMYC;
