'use strict';

var expect = require('expect.js');
var $ = require('jquery');

/*globals describe,it,beforeEach,afterEach*/

describe('mask', function () {

  var mask;

  beforeEach(function () {
    mask = require('../index');
  });

  afterEach(function () {
    mask.hide();
  });

  it('mask show', function () {
    mask.show();
    expect($('.ui-mask').length).to.be(1);
    expect($('.ui-mask').is(':visible')).to.be.ok();
    mask.hide();
    expect($('.ui-mask').is(':visible')).not.to.be.ok();
  });

  it('mask default attrs', function () {
    mask.show();
    var color = mask.element.css('background-color');
    expect(color === 'rgb(0, 0, 0)' || color === '#000').to.be(true);
    expect(Number(mask.element.css('opacity')).toFixed(1)).to.be('0.2');
  });

  it('mask set attrs', function () {
    mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
    var color = mask.element.css('background-color');
    expect(color === 'rgb(0, 128, 0)' || color === 'green').to.be(true);
    expect(Number(mask.element.css('opacity')).toFixed(1)).to.be('0.3');
  });

  it('mask single instance', function () {
    var oldMask = mask;
    var newMask = require('../index');
    expect(oldMask).to.be(newMask);
  });

});
