var React = require('react');
var Gallery = require('../carousel.jsx');

var Restaurant = React.createClass({

  PHOTOSET: [
    {
      src: "images/restaurant_images/restaurant1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant1.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant2.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant3.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant3.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant4.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant5.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant6.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/restaurant_images/restaurant6.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant7.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/restaurant_images/restaurant7.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant8.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant9.jpg"
      }
    },
    {
      src: "images/restaurant_images/restaurant10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/restaurant_images/restaurant10.jpg"
      }
    }
  ],

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>Restaurant in D Major</h1>
              <h2 style={{fontWeight: "400"}}>by Jacob Perkins</h2>
              <h2 style={{fontWeight: "400"}}>directed by Molly Clifford</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Sound Design by Carsen Joenk</p>
              <p>Stage Managed by Maggie Snell</p>
              <p>Photos by Ashley Garrett</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            <div>“Hello.</div>
            <div>How are you?</div>
            <div>I’ll be taking care of you this evening.</div>
            <div>Do you have any restrictions?</div>
            <div>Anything you’re afraid to consume?”</div>

            <p>Hoping to escape his life in the Outside World, Jacob has joined the team at Restaurant.  Each table provides an opportunity for a fresh start. Right?</p>
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Jacob ........................................................................ Jacob Perkins* </div>
              <div> SBC ....................................................................... Mallory Portnoy* </div>
              <div> Christian ................................................................... Ramon Torres </div>
              <div> Server ............................................................................ Matt Walker </div>
              <div> Olive .................................................................................... Rachel Lin </div>
              <div> Nora ................................................................................ Ying Ying Li* </div>
              <div> Trudy ................................................................................ Anne Troup* </div>
              <div> 1 ........................................................................................ Dawn Evans* </div>
              <div> 2 .................................................................................... David Littleton </div>
              <div> DJ .............................................................................. Devin Kawaoka* </div>
            </div>
          </div>

          <Gallery className="restaurant-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Restaurant;
