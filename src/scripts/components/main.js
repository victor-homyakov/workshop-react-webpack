// CSS
//require('../../styles/normalize.css');
require('../../styles/main.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');

var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route} = Router;

var WorkshopReactWebpackApp = require('./WorkshopReactWebpackApp');
var View = require('./View');
//var Edit = require('./Edit');

var routes = (
    <Route handler={WorkshopReactWebpackApp}>
        <Route name="/" handler={View}>
        </Route>
        {/*<Route name="edit" path="/edit/:articleId" handler={Edit}>
        </Route>*/}
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.body);
});
