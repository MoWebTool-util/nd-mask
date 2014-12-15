/**
 * Description: index.js
 * Author: crossjs <liwenfu@crossjs.com>
 * Date: 2014-12-15 14:39:16
 */

'use strict';

var Overlay = require('nd-overlay');

// Mask
// ----------
// 全屏遮罩层组件
var Mask = Overlay.extend({

  attrs: {
    width: '100%',
    height: '100%',

    className: 'ui-mask',
    opacity: 0.2,
    backgroundColor: '#000',
    style: {
      position: 'fixed',
      top: 0,
      left: 0
    },

    align: {
      // undefined 表示相对于当前可视范围定位
      baseElement: undefined
    }
  },

  _onRenderBackgroundColor: function (val) {
    this.element.css('backgroundColor', val);
  },

  _onRenderOpacity: function (val) {
    this.element.css('opacity', val);
  }
});

// 单例
module.exports = new Mask();
