var React = require('react');

var Contact = React.createClass({
  componentDidMount: function () {
    artfully.widgets.donation().display(4058,[]);
  },

  render: function () {
    return (
      <main className="group donate">
        <section>
          <p>
            Two Headed Rep is a brand new company.  We are able to make work
            thanks to the generosity of people like you! Your donations help us achieve our goal of creating accessible,
            cheap theatrical events that bring old and new plays into conversation
            with one another.
          </p>

          <p>
            To make a donation, click <a href="http://www.fracturedatlas.org/site/fiscal/profile?id=13891"> here </a>.
          </p>

          <p>
            Two Headed Rep is a sponsored project of Fractured Atlas, a non-profit arts service organization.  Contributions for the charitable purposes of Two Headed Rep must be made payable to “Fractured Atlas” only and are tax-deductible to the extent permitted by law.
          </p>

          <p className="thank-you">
            THANK YOU!
          </p>


        </section>
      </main>
    );
  }

});

module.exports = Contact;
