var React = require('react');
var ShowPreview = require('../show_preview');

var UntitledTartuffe = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Restaurant in D Major</div>
              <div>by Jacob Perkins</div>
              <div>directed by Molly Clifford</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div style={{fontWeight: "bold"}}>Lysistrata</div>
              <div>by Aristophanes</div>
              <div>directed and adapted by Lily Riopelle</div>
              <div>with music by Cody Owen Stine</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">April 29-May 7, 2017</div>
            <div className="centered">Tuesday - Saturday at 7:30PM, Sunday at 2PM</div>
            <div className="centered" style={{marginTop: 3}}><a className="highlight-link" href="http://temporarystorage.info" target="_blank">Temporary Storage</a></div>
          </div>

          <div className="centered" style={{fontSize: 40, fontWeight: 600, marginTop: 50}}>
            MORE INFO + TICKET LINK COMING SOON...
          </div>
        </section>
      </main>
    );
  }

});

module.exports = UntitledTartuffe;
