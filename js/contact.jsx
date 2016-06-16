var React = require('react');

var Contact = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section>

          <p>
            If you're interested in what we're doing and want to get involved, or if you
            just want to hear more, reach out!  We'd love to chat.
          </p>

          <p>
            We're especially interested in meeting playwrights who like what we do
            and want to collaborate!
          </p>

          <p>
            The best way to get in touch is to <a href="mailto:twoheadedrep@gmail.com?subject=reaching out">email</a> us.
          </p>

          <p>
            Or, you can <a href="mailto:twoheadedrep@gmail.com?subject=mailing list">sign up for our mailing list</a> to be notified about future events!
          </p>
        </section>
      </main>
    );
  }

});

module.exports = Contact;
