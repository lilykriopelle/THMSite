var React = require('react');
var ShowPreview = require('../show_preview');

var RestaurantLysistrata = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Reno & Moll</div>
              <div>by Emma Horwitz</div>
              <div>directed by Lily Riopelle</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div>August Strindberg's <span style={{fontWeight: "bold"}}>Miss Julie</span></div>
              <div>adapted by Brittany Allen, Will Arbery, and Amanda Keating</div>
              <div>directed by Molly Clifford</div>
            </div>
          </div>

          <div style={{marginTop: 20}}>
            <div className="centered">November 4-18, 2017</div>
            <div className="centered">The Workshop Theater's Jewel Box Theater</div>
          </div>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="RENO & MOLL" imageUrl="images/rm_images/1.jpg" link="/reno_and_moll"/>
            <ShowPreview classes={["float-right"]} title="MISS JULIE" imageUrl="images/mj_images/1.jpg" link="/miss_julie"/>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
