var React = require('react');
var Gallery = require('../carousel.jsx');

var Tartuffe = React.createClass({

  PHOTOSET: [
    {
      src: "images/tartuffe_images/tartuffe1.jpg",
      width: 400,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe1.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe2.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe2.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe3.jpg",
      width: 629,
      height: 525,
      aspectRatio: 1.19,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe3.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe4.jpg",
      width: 420,
      height: 526,
      aspectRatio: 0.79,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe4.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe5.jpg",
      width: 420,
      height: 526,
      aspectRatio: 0.79,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe5.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe6.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe6.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe7.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe7.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe8.jpg",
      width: 400,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe8.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe9.jpg",
      width: 600,
      height: 400,
      aspectRatio: 0.66,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe9.jpg"
      }
    },
    {
      src: "images/tartuffe_images/tartuffe10.jpg",
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: "images/tartuffe_images/tartuffe10.jpg"
      }
    }
  ],

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1>TARTUFFE</h1>
              <h2 style={{fontWeight: "400"}}>by Molière</h2>
              <h2 style={{fontWeight: "400"}}>translated and adapted by Amanda Keating</h2>
              <h2 style={{fontWeight: "400"}}>adapted and directed by Molly Clifford</h2>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
              <p>Scenic Design by Cate McCrea</p>
              <p>Lighting Design by Cheyenne Sykes</p>
              <p>Costume Design by Nicole Slaven</p>
              <p>Sound Design by Lawrence Schober</p>
              <p>Photos by Evan Zimmerman</p>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>
            <div>TARTUFFE is a play about a man</div>
            <div>Who comes onto the scene with a plan.</div>
            <div>He knows that he can dupe these folks</div>
            <div>And mooch off them all day while he evokes</div>
            <div>Heaven’s name - all to cover his hide</div>
            <div>(needless to say, he’s a little bit snide).</div>
            <div>Impressively, the play is entirely in verse</div>
            <div>And it’s a comedy so no one leaves in a hearse!</div>
            <div>This is, reputedly, Moliere’s greatest work,</div>
            <div>featuring Tartuffe, the afore mentioned jerk.</div>
            <div>It’s a good time for something political -</div>
            <div>Biting, and particularly critical.</div>
            <div>Made fresh for our ears by Amanda Keating,</div>
            <div>Tartuffe is a play about cheating.</div>
            <div>You must take action before the time is gone -</div>
            <div>We’ll show you what happens if you wait too long!</div>
          </div>
          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              <div> Madame Pernelle ....................................................................... Anne Kostick </div>
              <div> Orgon ................................................................................................. Michael Berry </div>
              <div> Elmire .................................................................................................. Brittany Allen </div>
              <div> Damis .......................................................................................... Max Reinhardsen </div>
              <div> Cleante .................................................................................................... Natalie Rich </div>
              <div> Mariane .................................................................................................... Ying Ying Li </div>
              <div> Valere ............................................................................ Jonathan Dean Draxton </div>
              <div> Dorine .............................................................................................................. Lizzie Fox </div>
              <div> Flipote/Laurent/Officer ........................................................... Sean Murphy </div>
              <div> Tartuffe ....................................................................................................... Will Dagger </div>
            </div>
          </div>
          <Gallery className="tartuffe-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = Tartuffe;
