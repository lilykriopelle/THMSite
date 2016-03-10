var React = require('react');

var Contact = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section>
          Our company may have the word "monster" in its name, but we promise, we're friendly!
          <br/><br/>
          If you're interested in what we're doing and want to get involved, or if you
          just want to hear more, reach out!  We'd love to chat.
          <br/><br/>
          We're especially interested in meeting playwrights who like what we do
          and want to collaborate!
          <br/><br/>

          The best way to get in touch is to <a href="mailto:twoheadedrep@gmail.com?subject=reaching out">email</a> us.
        </section>
      </main>
    );
  }

});

module.exports = Contact;
