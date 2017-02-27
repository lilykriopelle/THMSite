var React = require('react');
var TicketLink = require('./ticket_link.jsx');
var Slider = require('react-slick');

var Home = React.createClass({

  render: function() {
    var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true
   };
    return (
      <main className="group">
        <section className="front-page">
          <Slider {...settings}>
            <img src="images/dmyc_images/dmyc_2.jpg"/>
            <img src="images/tartuffe_images/tartuffe1.jpg"/>
            <img src="images/dmyc_images/dmyc_6.jpg"/>
            <img src="images/tartuffe_images/tartuffe8.jpg"/>
            <img src="images/dmyc_images/dmyc_10.jpg"/>
            <img src="images/tartuffe_images/tartuffe10.jpg"/>
          </Slider>
          <div className="silver right">Photos by Evan Zimmerman</div>
        </section>
      </main>
    );
  }

});

module.exports = Home;
