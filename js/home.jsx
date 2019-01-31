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
        <p className="donate-link" style={{marginTop: 30}}>
          <a href="https://www.artful.ly/store/events/17116">
            <img src={'images/ettwo.jpg'} style={{width: 800, margin: 'auto'}} target="_blank" alt="Et Two? Headed Rep"/>
          </a>
        </p>
      </div>
    );
  },

  render: function() {
    return (
      <main className="group">
        <section className="front-page">
            {this.show()}
        </section>
      </main>
    );
  }

});

module.exports = Home;
