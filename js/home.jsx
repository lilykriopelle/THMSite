var React = require('react');
var TicketLink = require('./ticket_link.jsx');
var Slider = require('react-slick');

var Home = React.createClass({
  noShow: function() {
    var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true
   };
    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Slider {...settings}>
          <img src="images/restaurant_images/restaurant1.jpg"/>
          <img src="images/lysistrata_images/lysistrata1.jpg"/>
          <img src="images/dmyc_images/dmyc_2.jpg"/>
          <img src="images/tartuffe_images/tartuffe1.jpg"/>
          <img src="images/restaurant_images/restaurant8.jpg"/>
          <img src="images/lysistrata_images/lysistrata7.jpg"/>
          <img src="images/dmyc_images/dmyc_6.jpg"/>
          <img src="images/tartuffe_images/tartuffe8.jpg"/>
        </Slider>
        <div className="silver right" style={{fontSize: 16}}>Photos 1, 2, 5 and 6 by Ashley Garrett. Photos 3, 4, 7, and 8 by Evan Zimmerman</div>
      </div>
    );
  },

  show: function() {
    return (
      <div>
        <p className="donate-link" style={{marginBottom: 20}}>
          Tickets on sale October 5th!
        </p>
        <img src={'images/Fall2017Horizontal.jpg'}/>
      </div>
    );
  },

  render: function() {
    return (
      <main className="group">
        <section className="front-page">
          <div>
            <p style={{fontSize: 50, marginBottom: 20}} className="centered">
              <a href="https://www.artful.ly/two-headed-rep" target="_blank" className="highlight-link">tickets</a> and <a href="https://www.artful.ly/two-headed-rep/store/passes" target="_blank" className="highlight-link">passes</a> on sale now!
            </p>

            <a href="/rm_mj" target="_blank">
              <img src={'images/Fall2017Horizontal.jpg'}/>
            </a>

            <p style={{marginTop: 20}}>{"We are so excited to announce that this fall, for the first time ever, you have the option of purchasing a Two Play Pass. What does that mean, exactly? It means you can buy one pass for just $23 that gets you into both shows on whatever day(s)/night(s) you want to see them! See old and new side by side in a single sitting, or come hang out with your favorite upstart theatre company on two separate occasions. Trust us: you'll have a great time either way."}</p>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = Home;
