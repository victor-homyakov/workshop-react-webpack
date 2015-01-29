'use strict';

var React = require('react/addons');
// Export React so the devtools can find it
window.top.React = React;

var Router = require('react-router');
var {Link, RouteHandler} = Router;

var ReactBootstrap = require('react-bootstrap');

var ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    ButtonLink = ReactRouterBootstrap.ButtonLink;

var WorkshopReactWebpackApp = React.createClass({
    render() {
        return (
            <div>
                <ReactBootstrap.Navbar>
                    <ReactBootstrap.Nav bsStyle="pills">
                        <NavItemLink to="/">Home</NavItemLink>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar>

                <RouteHandler />
            </div>
        );
    }
});

module.exports = WorkshopReactWebpackApp;
