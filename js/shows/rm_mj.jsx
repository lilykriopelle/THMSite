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

          <div className="centered">
            <p>Featuring Alton Alburo*, Sarah Jas Austell, Zoë Geltman, Fernando Gonzalez*, Rachel Sachnoff, and Eva Victor.</p>
            <p style={{textAlign: 'right', marginTop: 0}}>*Denotes members of Actors Equity Association</p>
            <p>Set design by Cate McCrea, costume design by Nicole Slaven, lighting design by Cheyenne Sykes, sound design by John Salutz, Stage Management by Kate Purdy and Hanako Rodriguez.</p>
          </div>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="RENO & MOLL" imageUrl="images/rm_images/1.jpg" link="/reno_and_moll"/>
            <ShowPreview classes={["float-right"]} title="MISS JULIE" imageUrl="images/mj_images/4.jpg" link="/miss_julie"/>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
