var React = require('react');

var Contact = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section>
          <p>
            This is where we would talk about people giving us money, maybe via Fractured Atlas.
          </p>
          <p>
            And maybe we would also say something like: If you want to support us but are not in a
            position to donate, you can still help!  Reach out to us <a href="#">here</a> to discuss ways you can get involved.
          </p>
        </section>
      </main>
    );
  }

});

module.exports = Contact;
