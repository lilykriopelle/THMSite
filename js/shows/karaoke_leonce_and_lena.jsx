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

          <div style={{marginTop: 20}}>
            <div className="centered">October 20-27, 2016</div>
            <div className="centered">Access Theater</div>
          </div>

          <img style={{marginTop: 20}} src={'images/llkaraokesidebyside.jpg'} style={{width: 600, margin: 'auto'}} target="_blank"/>

          <div style={{marginTop: 20}} className="centered">
            <p>Featuring Charles Baran*, Molly Carden*, Will Dagger, Eric Folks, Quinn Franzen*, Grace Gilmore, Michael Grew*, Zach Fike Hodges*, Zia Lawrence, Ying Ying Li*, Akyiaa Wilson, and Layla Wolfgang.</p>
            <p style={{textAlign: 'right', marginTop: 0}}>*Denotes members of Actors Equity Association</p>
            <p>Set design by Cate McCrea, costume design by Nicole Slaven, lighting design by Cheyenne Sykes, sound design by Jessica Hart, Stage Management by Daniel Bedoya and Hanako Rodriguez.</p>
          </div>

          <div style={{marginTop: 20}}>
            <div style={{fontWeight: "bold"}}>Karaoke at The Golden Sun Convention Center</div>
            <div>This Merger is happening. Sandwiched between team building exercises and more team building exercises is a mandatory karaoke hour at The Golden Sun Convention Center where everyone has to sing for their job. While Lenny and Vince vamp onstage and Elena and Janet hide in Stairwell D, Big Boss Pete is in the back still working with the numbers and there’s not enough Svedka & OJ to assuage everyone’s existential panic: Who’s getting fired? Who’s staying hired? And which is worse? Don’t worry. No matter what happens, everyone gets tote bags, toothpicks, and a killer selection of midi files to take with them on the road to whatever comes next.</div>
          </div>

          <div style={{marginTop: 20}}>
            <div style={{fontWeight: "bold"}}>Leonce and Lena</div>
            <div>When Prince Leonce learns that he's to wed Princess Lena – a woman he's never even laid eyes on – he and his BFF run away (to Italy!) to escape his fate and chase his ideals. Meanwhile, in another kingdom, Princess Lena learns she's to marry a prince named Leonce. Unwilling to be boxed in to the role of compliant wife to some dude she's never met and certainly doesn't love, she and her BFF run away (to Italy!) to escape her fate and chase her ideals. Oh, and this is a fairytale, so you can guess what happens next. Georg Büchner's raucous satire lampoons aristocracy, pseudo-philosophical bluster, and political echo chambers all while asking the question: who gets to rest easy knowing that fate will take care of everything in the end?</div>
          </div>
        </section>
      </main>
    );
  }

});

module.exports = KaraokeLL;
