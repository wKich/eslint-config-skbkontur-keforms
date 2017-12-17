'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // Ensure all imports appear before other statements
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
  'import/first': ['warn', 'absolute-first'],

  // Ensure all exports appear after other statements
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
  'import/exports-last': 'warn',

  // Report repeated import of the same module in multiple places
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',

  // Report namespace imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  'import/no-namespace': 'off',

  // Ensure consistent use of file extension within the import path
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': ['warn', 'always', { js: 'never', jsx: 'never' }],

  // Enforce a convention in module import order
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': ['warn', {
    'newlines-between': 'ignore',
    groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']]
  }],

  // Enforce a newline after import statements
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': ['warn', { count: 1 }],

  // Prefer a default export if module exports a single name
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 'error',

  // Limit the maximum number of dependencies a module can have
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
  'import/max-dependencies': ['warn', { max: 10 }],

  // Forbid unassigned imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  'import/no-unassigned-import': ['error', { allow: ['babel-register', 'babel-polyfll', './*.css', './*.less', './*.scss', './*.styl'] }],

  // Forbid named default exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
  'import/no-named-default': 'error',

  // Forbid anonymous values as default exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': ['warn', {
    allowArray: true,
    allowArrowFunction: false,
    allowAnonymousClass: false,
    allowAnonymousFunction: false,
    allowLiteral: true,
    allowObject: true
  }]
};