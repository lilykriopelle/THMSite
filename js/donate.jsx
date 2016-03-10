var React = require('react');

var Contact = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section>
          <p>
            Two Headed Monster is a sponsored project of Fractured Atlas, a non-profit arts service organization.  Contributions for the charitable purposes of Two Headed Monster must be made payable to “Fractured Atlas” only and are tax-deductible to the extent permitted by law.
          </p>

          <p>
            To make a donation, <a href="http://www.fracturedatlas.org/site/fiscal/profile?id=13891">click here</a>.
          </p>

          <p>
            THANK YOU!
          </p>
        </section>
      </main>
    );
  }

});

module.exports = Contact;
