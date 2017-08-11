var React = require('react');
var ShowPreview = require('../show_preview');

var RestaurantLysistrata = React.createClass({

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
              <div>Aristophanes' <span style={{fontWeight: "bold"}}>Lysistrata</span></div>
              <div>directed and adapted by Lily Riopelle</div>
              <div>with songs by Cody Owen Stine</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">April 29-May 7, 2017</div>
            <div className="centered" style={{marginTop: 3}}>at <a className="highlight-link" href="http://temporarystorage.info" target="_blank">Temporary Storage</a></div>
          </div>

          <div className="centered">
            <p>Featuring Lydian Blossom, Christina D. Eskridge, Kristian Espiritu*, Dawn Evans*, Lizzie Fox, Rachel B. Joyce, Devin Kawaoka*, Lizzie King-Hall*, Ying Ying Li*, Rachel Lin, David Littleton, Jacob Perkins*, Mallory Portnoy*, Tina Scariano*, Ramon Torres, Anne Troup*, and Matt Walker.</p>
            <p style={{textAlign: 'right', marginTop: 0}}>*Denotes members of Actors Equity Association</p>
            <p>Set design by Cate McCrea, lighting design by Cheyenne Sykes, costume design by Nicole Slaven, sound design by Carsen Joenk, choreography by Liz Charky, and production management by Carl Whipple, Assistant Direction for <span className="italic">Lysistrata</span> by Helen Handelman, Stage Management by Helen Handelman and Maggie Snell.</p>
          </div>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="RESTAURANT IN D MAJOR" imageUrl="images/restaurant_images/restaurant1.jpg" link="/restaurant"/>
            <ShowPreview classes={["float-right"]} title="LYSISTRATA" imageUrl="images/lysistrata_images/lysistrata1.jpg" link="/lysistrata"/>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
