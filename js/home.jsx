var React = require('react');
var TicketLink = require('./ticket_link.jsx');
var Slider = require('react-slick');

var Home = React.createClass({
  componentDidMount: function () {
    this.tick = 0
    this.interval = setInterval(function() {
      this.tick += 1
    }.bind(this), 2000)
  },

  componentWillUnmount () {
    window.clearInterval(this.interval)
  },

  noShow: function() {
    var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true
   };

   var words = [
     'better',
     'fairer',
     'funnier',
     'weirder'
   ]

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <div style={{margin: '20px 0'}}>
          creating a <div className="highlight">{ words[this.tick % 4] }</div> canon
        </div>
        <Slider {...settings}>
          <img src="images/karaoke_images/karaoke1.jpg"/>
          <img src="images/ll_images/ll1.jpg"/>
          <img src="images/restaurant_images/restaurant1.jpg"/>
          <img src="images/lysistrata_images/lysistrata1.jpg"/>
          <img src="images/dmyc_images/dmyc_2.jpg"/>
          <img src="images/tartuffe_images/tartuffe1.jpg"/>
          <img src="images/restaurant_images/restaurant8.jpg"/>
          <img src="images/lysistrata_images/lysistrata7.jpg"/>
          <img src="images/dmyc_images/dmyc_6.jpg"/>
          <img src="images/tartuffe_images/tartuffe8.jpg"/>
        </Slider>
        <div className="silver right" style={{fontSize: 16}}>Photos by Ashley Garrett and Evan Zimmerman</div>
      </div>
    );
  },

  show: function() {
    return (
      <div>
        <p className="donate-link" style={{marginTop: 30}}>
          <a href="https://www.artful.ly/store/events/17116">
            <img src={'images/ettwo.jpg'} style={{width: '100%', margin: 'auto'}} target="_blank" alt="Et Two? Headed Rep"/>
          </a>
        </p>
      </div>
    );
  },

  render: function() {
    return (
      <main className="group">
        <section className="front-page">
            {this.noShow()}
        </section>
      </main>
    );
  }

});

module.exports = Home;
