var React = require('react');
var Gallery = require('../carousel.jsx');

var Retreat = React.createClass({

  PHOTOSET: [
    {
      src: "images/retreat_images/retreat1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat1.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat2.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat3.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat3.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat4.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat5.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat6.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat7.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat8.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat9.jpg"
      }
    },
    {
      src: "images/retreat_images/retreat10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/retreat_images/retreat10.jpg"
      }
    }
  ],

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

          <Gallery className="retreat-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
