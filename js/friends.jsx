var React = require('react');
var Friend = require('./friend.jsx');

var Friends = React.createClass({

  render: function () {
    return (
      <main className="group">
        <section>

          <p>THESE ARE SOME OF THE FRIENDS WHO MAKE PLAYS WITH US:</p>
          <ul className="friends">
            <Friend name="Cate McCrea" website="http://catemccrea.com" title="Designer"/>
            <Friend name="Cheyenne Sykes" website="http://cheyennesykes.com" title="Designer"/>

          </ul>
        </section>
      </main>
    );
  }

});

module.exports = Friends;
