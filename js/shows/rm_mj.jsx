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

          <div style={{marginTop: 20}}>
            This fall, Two Headed Rep’s pairing of plays find themselves in the workplace, inhabited by people who, every day, confront, consider, and carry out what’s expected of them. What weighs on us when we’re expected to do everything? What about when nothing is expected of us? And what do we do about the dog? Two Headed Rep asks these questions and more with their fall rep: a new adaptation of Miss Julie by Brittany Allen, Will Arbery, and Amanda Keating, and Reno & Moll, a new play written in response to Strindberg’s classic by Emma Horwitz.
          </div>

          <div>
            <p style={{fontSize: 50, marginBottom: 20}} className="centered">
              <a href="https://www.artful.ly/two-headed-rep" target="_blank" className="highlight-link">tickets</a> and <a href="https://www.artful.ly/two-headed-rep/store/passes" target="_blank" className="highlight-link">passes</a> on sale now!
            </p>

            <img style={{width: '100%', marginBottom: 20}} src={'images/sched.jpg'}/>
            <a href="https://www.artful.ly/two-headed-rep"><img style={{width: '100%'}} src={'images/Fall2017Horizontal.jpg'}/></a>

            <p style={{marginTop: 20}}>{"We are so excited to announce that this fall, for the first time ever, you have the option of purchasing a Two Play Pass. What does that mean, exactly? It means you can buy one pass for just $23 that gets you into both shows on whatever day(s)/night(s) you want to see them! See old and new side by side in a single sitting, or come hang out with your favorite upstart theatre company on two separate occasions. Trust us: you'll have a great time either way."}</p>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = RestaurantLysistrata;
