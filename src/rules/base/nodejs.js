export default {

  // Enforce `return` After Callback
  // http://eslint.org/docs/rules/callback-return
  'callback-return': ['error', ['callback', 'cb', 'done', 'next']],

  // Enforce `require()` on the top-level module scope
  // http://eslint.org/docs/rules/global-require
  'global-require': 'error',

  // Enforce Callback Error Handling
  // http://eslint.org/docs/rules/handle-callback-err
  'handle-callback-err': ['error', '^(err|error)$'],

  // Disallow use of the `Buffer()` constructor
  // http://eslint.org/docs/rules/no-buffer-constructor
  'no-buffer-constructor': 'error',

  // Disallow Mixed Requires
  // http://eslint.org/docs/rules/no-mixed-requires
  'no-mixed-requires': ['error', { grouping: false, allowCall: false }],

  // Disallow new require
  // http://eslint.org/docs/rules/no-new-require
  'no-new-require': 'error',

  // Disallow string concatenation when using `__dirname` and `__filename`
  // http://eslint.org/docs/rules/no-path-concat
  'no-path-concat': 'error',

  // Disallow `process.env`
  // http://eslint.org/docs/rules/no-process-env
  'no-process-env': 'error',

  // Disallow `process.exit()`
  // http://eslint.org/docs/rules/no-process-exit
  'no-process-exit': 'error',

  // Disallow Node.js modules
  // http://eslint.org/docs/rules/no-restricted-modules
  'no-restricted-modules': 'off',

  // Disallow certain object properties
  // http://eslint.org/docs/rules/no-restricted-properties
  // TODO Add list of restricted properties
  'no-restricted-properties': 'error',

  // Disallow Synchronous Methods
  // http://eslint.org/docs/rules/no-sync
  'no-sync': 'error',
}
