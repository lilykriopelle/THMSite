var React = require('react');

var UntitledTartuffe = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Untitled</div>
              <div>by Lizzie Stern</div>
              <div>directed by Lily Riopelle</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div style={{fontWeight: "bold"}}>Tartuffe</div>
              <div>by Molière</div>
              <div>translated by Amanda Keating</div>
              <div>directed by Molly Clifford</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">October 20-30, 2016</div>
            <div className="centered">64 East 4th Street</div>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = UntitledTartuffe;
