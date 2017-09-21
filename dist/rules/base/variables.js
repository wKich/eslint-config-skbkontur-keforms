'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  // Enforce/Disallow Variable Initializations
  // http://eslint.org/docs/rules/init-declarations
  'init-declarations': ['error', 'always'],

  // Disallow Shadowing of Variables Inside of `catch`
  // http://eslint.org/docs/rules/no-catch-shadow
  'no-catch-shadow': 'error',

  // Disallow deleting variables
  // http://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // Disallow Labels That Are Variables Names
  // http://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // Disallow specific global variables
  // http://eslint.org/docs/rules/no-restricted-globals
  // NOTE Maybe over names
  // File
  // Text
  // event
  // getComputedStyle
  // length
  // module
  // name
  // outerHeight
  // outerWidth
  // parent
  // root
  // scroll
  // self
  // status
  // stop
  // top
  'no-restricted-globals': ['error', 'event'],

  // Disallow Shadowing
  // http://eslint.org/docs/rules/no-shadow
  'no-shadow': ['error', {
    builtinGlobals: true,
    hoist: 'all',
    allow: []
  }],

  // Disallow Shadowing of Restricted Names
  // http://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // Disallow Undeclared Variables
  // http://eslint.org/docs/rules/no-undef
  'no-undef': ['error', { typeof: true }],

  // Disallow Initializing to `undefined`
  // http://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // Disallow Use of `undefined` Variable
  // http://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // Disallow Unused Variables
  // http://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': ['error', {
    vars: 'all',
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^ignore',
    ignoreRestSiblings: true
  }],

  // Disallow Early Use
  // http://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': ['error', {
    functions: true,
    classes: true,
    variables: true
  }]
};