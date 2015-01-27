'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var WorkshopReactWebpackApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WorkshopReactWebpackApp = require('../../../src/scripts/components/WorkshopReactWebpackApp.js');
    component = React.createElement(WorkshopReactWebpackApp);
  });

  it('should create a new instance of WorkshopReactWebpackApp', function () {
    expect(component).toBeDefined();
  });
});
