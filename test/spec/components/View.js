'use strict';

describe('View', function () {
  var React = require('react/addons');
  var View, component;

  beforeEach(function () {
    View = require('../../../src/scripts/components/View.js');
    component = React.createElement(View);
  });

  it('should create a new instance of View', function () {
    expect(component).toBeDefined();
  });
});
