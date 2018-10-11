var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/Homepage')} />
    <Route name="authors" handler={require('./components/authors')} />
    <Route name="about" handler={require('./components/about')} />
    <Route name="addAuthor" path="/author" handler={require('./components/authors/ManageAuthorPage')} />
    <Route name="manageAuthor" path="/author/:id" handler={require('./components/authors/ManageAuthorPage')} />
    <NotFoundRoute handler={require('./components/NotFoundPage')} />
    <Redirect from="about-us" to="about" />
  </Route>
);

module.exports = routes;
