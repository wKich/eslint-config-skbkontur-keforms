export default {

  // Require braces in arrow function body
  // http://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],

  // Require parens in arrow function arguments
  // http://eslint.org/docs/rules/arrow-parens
  'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],

  // Require space before/after arrow function’s arrow
  // http://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': ['warn', {
    before: true,
    after: true,
  }],

  // Verify calls of `super()` in constructors
  // http://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

  // Enforce spacing around the * in generator functions
  // http://eslint.org/docs/rules/generator-star-spacing
  'generator-star-spacing': ['warn', 'after'],

  // Disallow modifying variables of class declarations
  // http://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // Disallow arrow functions where they could be confused with comparisons
  // http://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': ['warn', { allowParens: true }],

  // Disallow modifying variables that are declared using `const`
  // http://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // Disallow duplicate name in class members
  // http://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // Disallow duplicate imports
  // http://eslint.org/docs/rules/no-duplicate-imports
  'no-duplicate-imports': ['error', { includeExports: true }],

  // Disallow Symbol Constructor
  // http://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // Disallow specific imports
  // http://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // Disallow use of `this`/`super` before calling `super()` in constructors
  // http://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // Disallow unnecessary computed property keys on objects
  // http://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'warn',

  // Disallow unnecessary constructor
  // http://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // Disallow renaming import, export, and destructured assignments to the same name
  // http://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': ['warn', {
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false,
  }],

  // require `let` or `const` instead of `var`
  // http://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // Require Object Literal Shorthand Syntax
  // http://eslint.org/docs/rules/object-shorthand
  'object-shorthand': ['warn', 'always', {
    avoidQuotes: true,
    ignoreConstructors: false,
  }],

  // Suggest using arrow functions as callbacks
  // http://eslint.org/docs/rules/prefer-arrow-callback
  // TODO Check options for this rule
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: false,
    allowUnboundThis: true,
  }],

  // Suggest using `const`
  // http://eslint.org/docs/rules/prefer-const
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: false,
  }],

  // Disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
  // http://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Suggest using Reflect methods where applicable
  // http://eslint.org/docs/rules/prefer-reflect
  // TODO Check if need or not
  'prefer-reflect': 'error',

  // Suggest using the rest parameters instead of `arguments`
  // http://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // Suggest using the spread operator instead of `.apply()`
  // http://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // Suggest using template literals instead of string concatenation
  // http://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // Disallow generator functions that do not have `yield`
  // http://eslint.org/docs/rules/require-yield
  // TODO Check if need or nor
  'require-yield': 'error',

  // Enforce spacing between rest and spread operators and their expressions
  // http://eslint.org/docs/rules/rest-spread-spacing
  'rest-spread-spacing': ['warn', 'never'],

  // Import Sorting
  // http://eslint.org/docs/rules/sort-imports
  // TODO Enable and check for false positive
  'sort-imports': ['off', {
    ignoreCase: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
  }],

  // require symbol descriptions
  // http://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // Enforce Usage of Spacing in Template Strings
  // http://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': ['warn', 'never'],

  // Enforce spacing around the `*` in `yield*` expressions
  // http://eslint.org/docs/rules/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],
}
