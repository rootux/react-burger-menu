'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {
  menuWrap: function menuWrap(isOpen, width, right, top, bottom) {
    var transform = right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)';
    if (top) transform = 'translate3d(0, -' + width + ', 0)';
    if (bottom) transform = 'translate3d(0, ' + width + ', 0)';

    return {
      MozTransform: isOpen ? '' : transform,
      MsTransform: isOpen ? '' : transform,
      OTransform: isOpen ? '' : transform,
      WebkitTransform: isOpen ? '' : transform,
      transform: isOpen ? '' : transform,
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  },

  item: function item(isOpen, width, right, top, bottom, nthChild) {
    var transform = 'translate3d(0, ' + nthChild * 500 + 'px, 0)';
    if (top) transform = 'translate3d(0, ' + nthChild * 500 + 'px, 0)';
    if (bottom) transform = 'translate3d(0, ' + nthChild * 500 + 'px, 0)';

    return {
      MozTransform: isOpen ? '' : transform,
      MsTransform: isOpen ? '' : transform,
      OTransform: isOpen ? '' : transform,
      WebkitTransform: isOpen ? '' : transform,
      transform: isOpen ? '' : transform,
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];