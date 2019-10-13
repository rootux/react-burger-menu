'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {
  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      visibility: isOpen ? 'visible' : 'hidden',
      MozTransform: 'translate3d(0, 0, 0)',
      MsTransform: 'translate3d(0, 0, 0)',
      OTransform: 'translate3d(0, 0, 0)',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      zIndex: 1000
    };
  },

  overlay: function overlay(isOpen, width, right, top, bottom) {
    var transform = right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)';
    if (top) {
      transform = 'translate3d(0, ' + width + ', 0)';
    }
    if (bottom) {
      transform = 'translate3d(0, -' + width + ', 0)';
    }

    return {
      zIndex: 1400,
      MozTransform: isOpen ? transform : 'translate3d(0, 0, 0)',
      MsTransform: isOpen ? transform : 'translate3d(0, 0, 0)',
      OTransform: isOpen ? transform : 'translate3d(0, 0, 0)',
      WebkitTransform: isOpen ? transform : 'translate3d(0, 0, 0)',
      transform: isOpen ? transform : 'translate3d(0, 0, 0)',
      transition: 'all 0.5s',
      visibility: isOpen ? 'visible' : 'hidden'
    };
  },

  pageWrap: function pageWrap(isOpen, width, right, top, bottom) {
    var transform = right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)';
    if (top) {
      transform = 'translate3d(0, ' + width + ', 0)';
    }
    if (bottom) {
      transform = 'translate3d(0, -' + width + ', 0)';
    }

    return {
      MozTransform: isOpen ? '' : transform,
      MsTransform: isOpen ? '' : transform,
      OTransform: isOpen ? '' : transform,
      WebkitTransform: isOpen ? '' : transform,
      transform: isOpen ? '' : transform,
      transition: 'all 0.5s',
      zIndex: 1200,
      position: 'relative'
    };
  },

  burgerIcon: function burgerIcon(isOpen, width, right) {
    return {
      MozTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
      MsTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
      OTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
      WebkitTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
      transform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
      transition: 'all 0.5s',
      position: 'relative',
      zIndex: 0
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];