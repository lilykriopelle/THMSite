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

          <p className="donate-link">
            <a href="http://www.fracturedatlas.org/site/fiscal/profile?id=13891">click here to make a donation</a>
          </p>

          <p>
            Two Headed Rep is a sponsored project of Fractured Atlas, a non-profit arts service organization.  Contributions for the charitable purposes of Two Headed Rep must be made payable to “Fractured Atlas” only and are tax-deductible to the extent permitted by law.
          </p>

          <p>We also accept donations in kind!  Do you have access to a room we could rehearse in?  How about a printer we could use for our scripts and programs?  Scrap wood from your last DIY project?  It takes a lot of stuff to make a play, so before you throw something out, why not <a className="highlight-link" href="mailto:twoheadedrep@gmail.com?subject=potential donation">ask us</a> if we could use it?</p>

          <p className="thank-you">
            THANK YOU!
          </p>


        </section>
      </main>
    );
  }

});

module.exports = Contact;
