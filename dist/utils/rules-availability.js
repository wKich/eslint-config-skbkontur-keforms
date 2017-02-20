'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = check;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eslintPackageJsonPath = _path2.default.join(require.resolve('eslint'), '../../package.json');
let eslintVersion = null;

try {
  // eslint-disable-next-line no-sync
  ({ version: eslintVersion } = JSON.parse(_fs2.default.readFileSync(eslintPackageJsonPath)));
} catch (ignoreGetVersionError) {}
// Empty


// TODO Check eslint-plugin rules version

const rules = { 'template-tag-spacing': '>= 3.15.0' };

function check(ruleName, body) {
  // NOTE For now checking don't support handle options changes correctly
  if (_semver2.default.satisfies(eslintVersion, rules[ruleName]) || !rules[ruleName]) {
    return { [ruleName]: body };
  }

  return {};
}

exports.default = { check };