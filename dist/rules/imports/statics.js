'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  // Ensure imports point to a file/module that can be resolved
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', {
    commonjs: true,
    amd: true
  }],

  // Ensure named imports correspond to a named export in the remote file
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
  'import/named': 'error',

  // Ensure a default export is present, given a default import
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
  'import/default': 'error',

  // Ensure imported namespaces contain dereferenced properties as they are dereferenced
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
  'import/namespace': ['error', { allowComputed: false }],

  // Restrict which files can be imported in a given folder
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off'
};