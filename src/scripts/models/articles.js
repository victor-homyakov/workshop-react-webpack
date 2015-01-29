'use strict';

var _ = require('underscore');

var Article = function(name) {
    this.id = _.uniqueId();
    this.name = name;
    this.text = name;
};

var articles = {
    all: [
        new Article('Article 1'),
        new Article('Article 2')
    ]
};

module.exports = articles;
