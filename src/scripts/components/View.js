'use strict';

require('../../styles/View.css');

var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var Router = require('react-router');

var articles = require('./../models/articles');
var _ = require('underscore');

var View = React.createClass({
    render() {
        var list = _.map(articles.all, article =>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {article.name}

                        {/*&nbsp;<Router.Link to={'/edit/' + article.id}>edit</Router.Link>*/}
                    </div>
                    <div className="panel-body">{article.text.substr(0, 80)}&hellip;</div>
                </div>
        );

        return (
            <ReactBootstrap.Panel header="View articles">
                {list}
            </ReactBootstrap.Panel>
        );
    }
});

module.exports = View;
