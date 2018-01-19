var React = require('react');
var Gallery = require('../carousel.jsx');

var Retreat = React.createClass({

  PHOTOSET: [
    {
      src: "images/mj_images/1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/1.jpg"
      }
    },
    {
      src: "images/mj_images/2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/2.jpg"
      }
    },
    {
      src: "images/mj_images/3.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/3.jpg"
      }
    },
    {
      src: "images/mj_images/4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/4.jpg"
      }
    },
    {
      src: "images/mj_images/5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/5.jpg"
      }
    },
    {
      src: "images/mj_images/6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/6.jpg"
      }
    },
    {
      src: "images/mj_images/7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/7.jpg"
      }
    },
    {
      src: "images/mj_images/8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/8.jpg"
      }
    },
    {
      src: "images/mj_images/9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/mj_images/9.jpg"
      }
    },
    {
      src: "images/mj_images/10.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/mj_images/10.jpg"
      }
    }
  ],

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>August Strindberg's Miss Julie</h1>
              <h2 style={{fontWeight: "400"}}>adapted by Brittany Allen, Will Arbery, and Amanda Keating</h2>
              <h2 style={{fontWeight: "400"}}>directed by Molly Clifford</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Sound Design by John Salutz</p>
              <p>Photos by Ashley Garrett</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            To bring Miss Julie into the 21st century, Two Headed Rep commissioned three writers to explore and adapt one character each from Strindberg's classic to form a new, singular work. This process mirrors the play itself: when three people, each practically on different planets, find themselves crowded in a single room, they insistently prod, occasionally torment, and, most importantly, desperately need each other. It's Halloween night in the break room of Count's Chicken, a fast food franchise in Corsicana, Texas. What Julie, Gene, and Krissy expect of themselves and each other drives them to questions they thought they'd never ask and choices they never thought they'd make.
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Julie ........................................................................ Sarah Jes Austell </div>
              <div> Gene ....................................................................... Fernando Gonzales* </div>
              <div> Krissy ............................................................................. Rachel Sachnoff </div>
            </div>
          </div>

          <Gallery className="retreat-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
