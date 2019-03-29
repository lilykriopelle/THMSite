var React = require('react');
var Gallery = require('../carousel.jsx');

var LeonceAndLena = React.createClass({

  PHOTOSET: [
    {
      src: "images/ll_images/ll1.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll1.jpg"
      }
    },
    {
      src: "images/ll_images/ll2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll2.jpg"
      }
    },
    {
      src: "images/ll_images/ll3.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/ll_images/ll3.jpg"
      }
    },
    {
      src: "images/ll_images/ll4.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll4.jpg"
      }
    },
    {
      src: "images/ll_images/ll5.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll5.jpg"
      }
    },
    {
      src: "images/ll_images/ll6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll6.jpg"
      }
    },
    {
      src: "images/ll_images/ll7.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll7.jpg"
      }
    },
    {
      src: "images/ll_images/ll8.jpg",
      width: 600,
      height: 400,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/ll_images/ll8.jpg"
      }
    },
    {
      src: "images/ll_images/ll9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/ll_images/ll9.jpg"
      }
    },
    {
      src: "images/ll_images/ll10.jpg",
      width: 400,
      height: 600,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/ll_images/ll10.jpg"
      }
    }
  ],

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1 style={{fontSize: "30", width: 400}}>Georg Büchner's Leonce and Lena</h1>
              <h2 style={{fontWeight: "400"}}>tranlated/adapted by Leonie Bell</h2>
              <h2 style={{fontWeight: "400"}}>directed by Lily Riopelle</h2>
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
            When Prince Leonce learns that he's to wed Princess Lena – a woman he's never even laid eyes on – he and his BFF run away (to Italy!) to escape his fate and chase his ideals. Meanwhile, in another kingdom, Princess Lena learns she's to marry a prince named Leonce. Unwilling to be boxed in to the role of compliant wife to some dude she's never met and certainly doesn't love, she and her BFF run away (to Italy!) to escape her fate and chase her ideals. Oh, and this is a fairytale, so you can guess what happens next. Georg Büchner's raucous satire lampoons aristocracy, pseudo-philosophical bluster, and political echo chambers all while asking the question: who gets to rest easy knowing that fate will take care of everything in the end?
          </div>

          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <p>Featuring Charles Baran*, Will Dagger, Eric Folks, Grace Gilmore, Zach Fike Hodges*, Zia Lawrence, and Layla Wolfgang.</p>
            </div>
          </div>

          <Gallery className="retreat-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = LeonceAndLena;
