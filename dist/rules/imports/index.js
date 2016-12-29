'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

var _statics = require('./statics');

var _statics2 = _interopRequireDefault(_statics);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _help2.default, _modules2.default, _statics2.default, _style2.default);