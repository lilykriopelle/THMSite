var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="text-right" style={{width: '100%', boxSizing: 'border-box', padding: 10}}>
        <div style={{height: '100%', float: 'right', display: 'flex', alignItems: 'center'}}>
          <div style={{marginRight: 7}}>follow us on social media!</div> <a className="social" style={{marginRight: 7}} href="http://www.facebook.com/twoheadedrep" target="_blank"><img alt="facebook" src="images/small_fb_logo.png"/></a> <a className="social" href="http://www.instagram.com/twoheadedrep" target="_blank"><img alt="instagram" src="images/small_ig_logo.png"/></a>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
