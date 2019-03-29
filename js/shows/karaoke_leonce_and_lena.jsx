var React = require('react');
var ShowPreview = require('../show_preview');

var KaraokeLL = React.createClass({

  render: function () {
    return (
      <main>
        <section>
          <div className="group">
            <div style={{float: "left", textAlign: "left"}}>
              <div style={{fontWeight: "bold"}}>Karaoke at The Golden Sun Convention Center</div>
              <div>by Jahna Ferron-Smith</div>
              <div>directed by Molly Clifford</div>
            </div>

            <div style={{float: "right", textAlign: "right"}}>
              <div>Georg Büchner's <span style={{fontWeight: "bold"}}>Leonce and Lena</span></div>
              <div>translated and adapted by Leonie Bell</div>
              <div>directed by Lily Riopelle</div>
            </div>
          </div>

          <div style={{marginTop: 20, marginBottom: 20}}>
            <div className="centered">October 20-27, 2016</div>
            <div className="centered">Access Theater</div>
          </div>

          <img src={'images/llkaraokesidebyside.jpg'} style={{width: 600, margin: 'auto'}} target="_blank"/>

          <div style={{marginTop: 20}} className="centered">
            <p>Featuring Charles Baran*, Molly Carden*, Will Dagger, Eric Folks, Quinn Franzen*, Grace Gilmore, Michael Grew*, Zach Fike Hodges*, Zia Lawrence, Ying Ying Li*, Akyiaa Wilson, and Layla Wolfgang.</p>
            <p style={{textAlign: 'right', marginTop: 0}}>*Denotes members of Actors Equity Association</p>
            <p>Set design by Cate McCrea, costume design by Nicole Slaven, lighting design by Cheyenne Sykes, sound design by Jessica Hart, Stage Management by Daniel Bedoya and Hanako Rodriguez.</p>
          </div>

          <div className="group" style={{marginTop: 20}}>
            <ShowPreview classes={["float-left"]} title="LEONCE & LENA" imageUrl="images/ll_images/ll4.jpg" link="/karaoke"/>
            <ShowPreview classes={["float-right"]} title="KARAOKE AT THE GOLDEN SUN CONVENTION CENTER" imageUrl="images/karaoke_images/karaoke1.jpg" link="/karaoke"/>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = KaraokeLL;
