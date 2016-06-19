var React = require('react');

var Contact = React.createClass({

  render: function () {
    return (
      <main classNameName="group contact">
        <section>

          <p>
            If you're interested in what we're doing and want to get involved, or if you
            just want to hear more, reach out!  We'd love to chat.
          </p>

          <p>
            We're especially interested in meeting playwrights and designers who like what we do
            and want to collaborate!
          </p>

          <p>
            The best way to get in touch is to <a className="highlight-link" href="mailto:twoheadedrep@gmail.com?subject=reaching out">email</a> us.
          </p>

          <p>
            If you want to stay in the loop when we announce new projects and programs, subscribe to our mailing list!
          </p>

          <div id="mc_embed_signup">
            <form action="//twoheadedrep.us13.list-manage.com/subscribe/post?u=0c5237ad7fef8bc895eb118ef&amp;id=70216265cb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" style={{paddingLeft: 0}} noValidate>
                <div id="mc_embed_signup_scroll">
            <div className="indicates-required" style={{marginRight: 0}}><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group" style={{width: "100%"}}>
            	<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
            </label>
            	<input type="email" name="EMAIL" className="required email" id="mce-EMAIL" style={{fontSize: 16}}/>
            </div>
            <div className="mc-field-group" style={{width: "100%"}}>
            	<label htmlFor="mce-FNAME">First Name </label>
            	<input type="text" name="FNAME" className="" id="mce-FNAME" style={{fontSize: 16}}/>
            </div>
            <div className="mc-field-group" style={{width: "100%"}}>
            	<label htmlFor="mce-LNAME">Last Name </label>
            	<input type="text" name="LNAME" className="" id="mce-LNAME" style={{fontSize: 16}}/>
            </div>
            	<div id="mce-responses" className="clear">
            		<div className="response" id="mce-error-response" style={{display:"none"}}></div>
            		<div className="response" id="mce-success-response" style={{display:"none"}}></div>
            	</div>
                <div style={{position: "absolute", left: -5000}} aria-hidden="true">
                  <input type="text" name="b_0c5237ad7fef8bc895eb118ef_70216265cb" tabIndex="-1" value=""/>
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </div>
            </form>
          </div>

        </section>
      </main>
    );
  }

});

module.exports = Contact;
