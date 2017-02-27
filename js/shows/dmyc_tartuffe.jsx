var React = require('react');
var ShowPreview = require('../show_preview');

var UntitledTartuffe = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Don't Make Yourself Crazy</div>
              <div>by Lizzie Stern</div>
              <div>directed by Lily Riopelle</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div style={{fontWeight: "bold"}}>TARTUFFE</div>
              <div>by Molière</div>
              <div>translated and adapted by Amanda Keating</div>
              <div>adapted and directed by Molly Clifford</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">October 20-30, 2016</div>
            <div className="centered">64 East 4th Street</div>
          </div>


          <p>
            On the brink of a harshly contested and historical election, we presented two new pieces that considered what it means to be an American facing the stark, strange, and sometimes hilarious implications of new leadership.
          </p>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="DON'T MAKE YOURSELF CRAZY" imageUrl="images/dmyc_images/dmyc_2.jpg" link="/dmyc"/>
            <ShowPreview classes={["float-right"]} title="TARTUFFE" imageUrl="images/tartuffe_images/tartuffe10.jpg" link="/tartuffe"/>
          </div>

        </section>
      </main>
    );
  }

});

module.exports = UntitledTartuffe;
