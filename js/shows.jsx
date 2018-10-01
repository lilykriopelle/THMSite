var React = require('react');

var Shows = React.createClass({

  render: function () {
    return (
      <main className="shows">
        <ul>
          <li>
            <a href="/karaoke_leonce_and_lena">
              Karaoke... / Leonce and Lena - October 2018
            </a>
          </li>

          <li>
            <a href="/rm_mj">
              Reno & Moll / Miss Julie – November 2017
            </a>
          </li>

          <li>
            <a href="/restaurant_lysistrata">
              Restaurant in D Major / Lysistrata – April 2017
            </a>
          </li>

          <li>
            <a href="/dmyc_tartuffe">
              Don't Make Yourself Crazy / TARTUFFE – October 2016
            </a>
          </li>

          <li>
            <a href="/retreat_electra">
              RETREAT / Electra – April 2016
            </a>
          </li>
        </ul>
      </main>
    );
  }

});

module.exports = Shows;
