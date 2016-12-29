'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _es = require('./es6');

var _es2 = _interopRequireDefault(_es);

var _nodejs = require('./nodejs');

var _nodejs2 = _interopRequireDefault(_nodejs);

var _practices = require('./practices');

var _practices2 = _interopRequireDefault(_practices);

var _strict = require('./strict');

var _strict2 = _interopRequireDefault(_strict);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _variables = require('./variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _errors2.default, _es2.default, _nodejs2.default, _practices2.default, _strict2.default, _styles2.default, _variables2.default);