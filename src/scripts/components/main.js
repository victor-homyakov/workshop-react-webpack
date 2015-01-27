var WorkshopReactWebpackApp = require('./WorkshopReactWebpackApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={WorkshopReactWebpackApp}>
    <Route name="/" handler={WorkshopReactWebpackApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
