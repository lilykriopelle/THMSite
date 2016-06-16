var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: false,
      className: "carousel"
    };

    var images = this.props.items.map(function(imageName){
      return <img key="imageName" src={imageName}/>;
    });

    return (
      <Slider {...settings}>
        {images}
      </Slider>
    );
  }
});

module.exports = SimpleSlider;
