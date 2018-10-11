var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router, and Flux for ultra-responsive web apps.</p>
        <Link to="about">
          <button className="btn btn-lg btn-primary">Learn more</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
