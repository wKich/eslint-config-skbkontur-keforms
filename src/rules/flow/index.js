export default {
  // Enforces a particular style for boolean type annotations. This rule takes one argument.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
  'flowtype/boolean-style': ['error', 'boolean'],

  // Marks Flow type identifiers as defined.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
  'flowtype/define-flow-type': 'error',

  // Enforces consistent use of trailing commas in Object and Tuple annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
  'flowtype/delimiter-dangle': ['warn', 'always-multiline'],

  // Enforces consistent spacing within generic type annotation parameters.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
  'flowtype/generic-spacing': ['warn', 'never'],

  // Checks for duplicate properties in Object annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
  'flowtype/no-dupe-keys': 'error',

  // Requires use of `$ReadOnlyArray` instead of just `Array` or array shorthand notation
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-mutable-array
  'flowtype/no-mutable-array': 'off',

  // Disallows use of primitive constructors as types, such as `Boolean`, `Number` and `String`.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
  'flowtype/no-primitive-constructor-types': 'error',

  // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
  'flowtype/no-types-missing-file-annotation': 'error',

  // Ignores type cast expressions, but otherwise behaves the same as ESLint's `no-unused-expressions`
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
  // TODO Check usage
  'flowtype/no-unused-expressions': 'warn',

  // Warns against weak type annotations `any`, `Object` and `Function`.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
  'flowtype/no-weak-types': [
    'warn',
    {
      any: true,
      Object: true,
      Function: true,
    },
  ],

  // Enforces consistent separators between properties in Flow object types.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
  'flowtype/object-type-delimiter': ['error', 'comma'],

  // Requires that all function parameters have type annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
  'flowtype/require-parameter-type': ['off', { excludeArrowFunctions: 'expressionsOnly' }],

  // Requires that functions have return type annotation.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
  'flowtype/require-return-type': [
    'off',
    'always',
    {
      annotateUndefined: 'always',
      excludeArrowFunctions: 'expressionsOnly',
    },
  ],

  // This rule validates Flow file annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
  'flowtype/require-valid-file-annotation': ['error', 'always', { annotationStyle: 'line' }],

  // Requires that all variable declarators have type annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
  'flowtype/require-variable-type': 'off',

  // Enforces consistent use of semicolons after type aliases.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
  'flowtype/semi': ['warn', 'never'],

  // Enforces sorting of Object annotations.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
  'flowtype/sort-keys': [
    'warn',
    'asc',
    {
      caseSensitive: true,
      natural: true,
    },
  ],

  // Enforces consistent spacing after the type annotation colon.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
  'flowtype/space-after-type-colon': ['warn', 'always'],

  // Enforces consistent spacing before the opening `<` of generic type annotation parameters.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
  'flowtype/space-before-generic-bracket': ['warn', 'never'],

  // Enforces consistent spacing before the type annotation colon.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
  'flowtype/space-before-type-colon': ['warn', 'never'],

  // Enforces a consistent naming pattern for type aliases.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
  'flowtype/type-id-match': ['warn', '^([A-Z][a-z0-9]*)+$'],

  // Enforces consistent spacing around union and intersection type separators (`|` and `&`).
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
  'flowtype/union-intersection-spacing': ['warn', 'always'],

  // Marks Flow type alias declarations as used.
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
  'flowtype/use-flow-type': 'error',
}
