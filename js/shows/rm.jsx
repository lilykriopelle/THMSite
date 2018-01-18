var React = require('react');
var Gallery = require('../carousel.jsx');

var Retreat = React.createClass({

  PHOTOSET: [
    {
      src: "images/rm_images/1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/1.jpg"
      }
    },
    {
      src: "images/rm_images/2.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/rm_images/2.jpg"
      }
    },
    {
      src: "images/rm_images/3.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/3.jpg"
      }
    },
    {
      src: "images/rm_images/4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/4.jpg"
      }
    },
    {
      src: "images/rm_images/5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/5.jpg"
      }
    },
    {
      src: "images/rm_images/6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/6.jpg"
      }
    },
    {
      src: "images/rm_images/7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/7.jpg"
      }
    },
    {
      src: "images/rm_images/8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/8.jpg"
      }
    },
    {
      src: "images/rm_images/9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/9.jpg"
      }
    },
    {
      src: "images/rm_images/10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/rm_images/10.jpg"
      }
    }
  ],

  render: function () {

    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30"}}>Reno & Moll</h1>
              <h2 style={{fontWeight: "400"}}>by Emma Horwitz</h2>
              <h2 style={{fontWeight: "400"}}>directed by Lily Riopelle</h2>
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
            Harper has played the most beloved dog on children's TV for ten years. She knows her lines and she knows her choreography, she just doesn't know why she's still doing this job. Is it for the fans who adore her? Do they adore her or just her canine alter ego? And what's the difference anyway? When Harper's longtime co-star leaves the show, she wonders whether it might be time to make a change as well. But how do you change when you've played the same character for so long that you can't remember what it's like to be yourself?
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Benj ........................................................................ Alton Alburo* </div>
              <div> Daisy/Simone ....................................................................... Zoë Geltman </div>
              <div> Harper ............................................................................. Eva Victor </div>
            </div>
          </div>

          <Gallery className="retreat-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Retreat;
