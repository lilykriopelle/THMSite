var React = require('react');
var Gallery = require('../carousel.jsx');

var Events = React.createClass({

  PHOTOSET: [],

  render: function () {
    return (
      <main>
        <section className="show-details">
          <div className="group">
            <div className="credits" style={{float: "left", textAlign: "left"}}>
              <h1>{"Dark Day Cabaret: Expectations"}</h1>
            </div>
            <div className="credits" style={{float: "right", textAlign: "right"}}>
            </div>
          </div>
          <div style={{marginBottom: 20, textAlign: "justify"}}>

          </div>
          <div className="credits" style={{textAlign: "center"}}>
            <div className="centered">
              <h1>CAST</h1>
              Comma separated list of actors
            </div>
          </div>
          <Gallery className="events-carousel" items={this.PHOTOSET}/>
        </section>
      </main>
    );
  }

});

module.exports = DMYC;
