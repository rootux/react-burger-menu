'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snapsvgImporter = require('../snapsvgImporter');

var _snapsvgImporter2 = _interopRequireDefault(_snapsvgImporter);

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {
  svg: {
    lib: _snapsvgImporter2['default'],
    pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
    pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
    animate: function animate(path) {
      path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
    }
  },

  morphShape: function morphShape(isOpen, width, right, top, bottom) {
    return {
      position: 'absolute',
      width: top || bottom ? '100%' : 120,
      height: !top && !bottom ? '100%' : 120,
      right: right ? 'inherit' : 0,
      left: right ? 0 : 'inherit',
      bottom: bottom ? 'initial' : 0,
      top: top ? 'initial' : 0,
      MozTransform: right ? 'rotateY(180deg)' : '',
      MsTransform: right ? 'rotateY(180deg)' : '',
      OTransform: right ? 'rotateY(180deg)' : '',
      WebkitTransform: right ? 'rotateY(180deg)' : '',
      transform: right ? 'rotateY(180deg)' : ''
    };
  },

  menuWrap: function menuWrap(isOpen, width, right, top, bottom) {
    var transform = right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)';
    if (top) transform = 'translate3d(0, -100%, 0)';
    if (bottom) transform = 'translate3d(0, 100%, 0)';

    return {
      MozTransform: isOpen ? 'translate3d(0, 0, 0)' : transform,
      MsTransform: isOpen ? 'translate3d(0, 0, 0)' : transform,
      OTransform: isOpen ? 'translate3d(0, 0, 0)' : transform,
      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : transform,
      transform: isOpen ? 'translate3d(0, 0, 0)' : transform,
      transition: 'all 0.3s'
    };
  },

  menu: function menu(isOpen, width, right, top, bottom) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      width: top || bottom ? '100%' : 180,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflow: top || bottom ? 'auto' : 'visible'
    };
  },

  itemList: function itemList(isOpen, width, right) {
    if (right) {
      return {
        position: 'relative',
        left: '-110px',
        width: '170%',
        overflow: 'auto'
      };
    }
  },

  pageWrap: function pageWrap(isOpen, width, right, top, bottom) {
    var transform = right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)';
    if (top) transform = 'translate3d(0, 100px, 0)';
    if (bottom) transform = 'translate3d(0, -100px, 0)';

    return {
      MozTransform: isOpen ? '' : transform,
      MsTransform: isOpen ? '' : transform,
      OTransform: isOpen ? '' : transform,
      WebkitTransform: isOpen ? '' : transform,
      transform: isOpen ? '' : transform,
      transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
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