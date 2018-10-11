/* jQuery */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../common/Header');
$ = JQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
