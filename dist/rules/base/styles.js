'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint quote-props: 'off' */

const INDENT_SIZE = 2;
const MAX_BLOCKS_DEPTH = 4;
const MAX_CALLBACK_DEPTH = 3;
const MAX_FUNCTION_PARAMS = 4;
const MAX_FUNCTION_STATEMENTS = 30;

exports.default = {

  // Disallow or enforce spaces inside of brackets
  // http://eslint.org/docs/rules/array-bracket-spacing
  'array-bracket-spacing': ['warn', 'never'],

  // Disallow or enforce spaces inside of single line blocks
  // http://eslint.org/docs/rules/block-spacing
  'block-spacing': ['warn', 'always'],

  // Require Brace Style
  // http://eslint.org/docs/rules/brace-style
  'brace-style': ['warn', '1tbs', { allowSingleLine: false }],

  // Require Camelcase
  // http://eslint.org/docs/rules/camelcase
  'camelcase': ['warn', { properties: 'always' }],

  // Enforce or disallow capitalization of the first letter of a comment
  // http://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],

  // Require or disallow trailing commas
  // http://eslint.org/docs/rules/comma-dangle
  'comma-dangle': ['warn', 'always-multiline'],

  // Enforces spacing around commas
  // http://eslint.org/docs/rules/comma-spacing
  'comma-spacing': ['warn', {
    before: false,
    after: true
  }],

  // Comma style
  // http://eslint.org/docs/rules/comma-style
  'comma-style': ['warn', 'last'],

  // Disallow or enforce spaces inside of computed properties
  // http://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': ['warn', 'never'],

  // Require Consistent This
  // http://eslint.org/docs/rules/consistent-this
  'consistent-this': ['warn', 'self'],

  // Require file to end with single newline
  // http://eslint.org/docs/rules/eol-last
  'eol-last': ['error', 'always'],

  // Require or disallow spacing between `function` identifiers and their invocations
  // http://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': ['warn', 'never'],

  // Require function names to match the name of the variable or property to which they are assigned
  // http://eslint.org/docs/rules/func-name-matching
  'func-name-matching': ['error', 'always', { includeCommonJSModuleExports: false }],

  // Require or disallow named `function` expressions
  // http://eslint.org/docs/rules/func-names
  'func-names': ['warn', 'as-needed'],

  // Enforce the consistent use of either `function` declarations or expressions
  // http://eslint.org/docs/rules/func-style
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

  // Disallow specified identifiers
  // http://eslint.org/docs/rules/id-blacklist
  'id-blacklist': 'off',

  // Enforce minimum and maximum identifier lengths
  // http://eslint.org/docs/rules/id-length
  'id-length': 'off',

  // Require identifiers to match a specified regular expression
  // http://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // Enforce consistent indentation
  // http://eslint.org/docs/rules/indent
  'indent': ['warn', INDENT_SIZE, {
    SwitchCase: 1,
    VariableDeclarator: {
      var: INDENT_SIZE,
      let: INDENT_SIZE,
      const: INDENT_SIZE + 1
    },
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: {
      parameters: 'first',
      body: 1
    },
    FunctionExpression: {
      parameters: 'first',
      body: 1
    },
    CallExpression: { arguments: 'first' },
    ArrayExpression: 1,
    ObjectExpression: 1
  }],

  // Enforce the consistent use of either double or single quotes in JSX attributes
  // http://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': ['warn', 'prefer-double'],

  // Enforce consistent spacing between keys and values in object literal properties
  // http://eslint.org/docs/rules/key-spacing
  'key-spacing': ['warn', {
    beforeColon: false,
    afterColon: true,
    mode: 'strict'
  }],

  // Enforce consistent spacing before and after keywords
  // http://eslint.org/docs/rules/keyword-spacing
  'keyword-spacing': ['warn', {
    before: true,
    after: true
  }],

  // Enforce position of line comments
  // http://eslint.org/docs/rules/line-comment-position
  'line-comment-position': ['error', { position: 'above' }],

  // Enforce consistent linebreak style
  // http://eslint.org/docs/rules/linebreak-style
  // TODO How to check this in windows?
  'linebreak-style': ['warn', 'unix'],

  // Require empty lines around comments
  // http://eslint.org/docs/rules/lines-around-comment
  'lines-around-comment': ['warn', {
    beforeBlockComment: true,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: false,
    allowObjectStart: true,
    allowObjectEnd: false,
    allowArrayStart: true,
    allowArrayEnd: false
  }],

  // Require or disallow newlines around directives
  // http://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': ['error', {
    before: 'never',
    after: 'always'
  }],

  // Enforce a maximum depth that blocks can be nested
  // http://eslint.org/docs/rules/max-depth
  'max-depth': ['warn', MAX_BLOCKS_DEPTH],

  // Enforce a maximum line length
  // http://eslint.org/docs/rules/max-len
  'max-len': ['warn', {
    code: 120,
    tabWidth: INDENT_SIZE,
    ignoreComments: false,
    ignoreTrailingComments: false,
    ignoreUrls: false,
    ignoreStrings: false,
    ignoreTemplateLiterals: false,
    ignoreRegExpLiterals: false
  }],

  // Enforce a maximum file length
  // http://eslint.org/docs/rules/max-lines
  'max-lines': ['warn', {
    max: 300,
    skipBlankLines: true,
    skipComments: true
  }],

  // Enforce a maximum depth that callbacks can be nested
  // http://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': ['warn', MAX_CALLBACK_DEPTH],

  // Enforce a maximum number of parameters in `function` definitions
  // http://eslint.org/docs/rules/max-params
  'max-params': ['warn', MAX_FUNCTION_PARAMS],

  // Enforce a maximum number of statements allowed in `function` blocks
  // http://eslint.org/docs/rules/max-statements
  // TODO Need some statistics
  'max-statements': ['off', MAX_FUNCTION_STATEMENTS],

  // Enforce a maximum number of statements allowed per line
  // http://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['warn', { max: 1 }],

  // Enforce or disallow newlines between operands of ternary expressions
  // http://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': ['off', 'always'],

  // Require constructor `function` names to begin with a capital letter
  // http://eslint.org/docs/rules/new-cap
  'new-cap': ['warn', {
    newIsCap: true,
    capIsNew: false,
    properties: true
  }],

  // Require parentheses when invoking a constructor with no arguments
  // http://eslint.org/docs/rules/new-parens
  'new-parens': 'error',

  // Require or disallow an empty line after var declarations
  // http://eslint.org/docs/rules/newline-after-var
  'newline-after-var': ['warn', 'always'],

  // Require an empty line before `return` statements
  // http://eslint.org/docs/rules/newline-before-return
  'newline-before-return': 'warn',

  // Require a newline after each call in a method chain
  // http://eslint.org/docs/rules/newline-per-chained-call
  'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],

  // Disallow `Array` constructors
  // http://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // Disallow bitwise operators
  // http://eslint.org/docs/rules/no-bitwise
  'no-bitwise': ['warn', { allow: ['~'] }],

  // Disallow `continue` statements
  // http://eslint.org/docs/rules/no-continue
  'no-continue': 'warn',

  // Disallow inline comments after code
  // http://eslint.org/docs/rules/no-inline-comments
  'no-inline-comments': 'warn',

  // Disallow `if` statements as the only statement in `else` blocks
  // http://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'warn',

  // Disallow mixes of different operators
  // http://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': ['warn', {
    groups: [['+', '-', '*', '/', '%', '**'], ['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
    allowSamePrecedence: true
  }],

  // Disallow mixed spaces and tabs for indentation
  // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'warn',

  // Disallow multiple empty lines
  // http://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['warn', {
    max: 2,
    maxEOF: 1
  }],

  // Disallow negated conditions
  // http://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'error',

  // Disallow nested ternary expressions
  // http://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // Disallow `Object` constructors
  // http://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',

  // Disallow the unary operators `++` and `--`
  // http://eslint.org/docs/rules/no-plusplus
  'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

  // Disallow specified syntax
  // http://eslint.org/docs/rules/no-restricted-syntax
  // TODO Add restricted statements
  'no-restricted-syntax': ['error', 'WithStatement'],

  // Disallow tabs in file
  // http://eslint.org/docs/rules/no-tabs
  'no-tabs': 'warn',

  // Disallow ternary operators
  // http://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // Disallow trailing whitespace at the end of lines
  // http://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': ['warn', { skipBlankLines: false }],

  // Disallow dangling underscores in identifiers
  // http://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': ['warn', { allowAfterThis: true }],

  // Disallow ternary operators when simpler alternatives exist
  // http://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // Disallow whitespace before properties
  // http://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'warn',

  // Enforce consistent line breaks inside braces
  // http://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': ['warn', {
    multiline: true,
    minProperties: 2
  }],

  // Disallow or enforce spaces inside of curly braces in objects
  // http://eslint.org/docs/rules/object-curly-spacing
  'object-curly-spacing': ['warn', 'always'],

  // Enforce placing object properties on separate lines
  // http://eslint.org/docs/rules/object-property-newline
  'object-property-newline': ['warn', { allowMultiplePropertiesPerLine: true }],

  // Require or Disallow One Variable Declaration per Scope
  // http://eslint.org/docs/rules/one-var
  'one-var': ['warn', 'never'],

  // Require or disallow an newline around variable declarations
  // http://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['warn', 'always'],

  // Operator Assignment Shorthand
  // http://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['warn', 'never'],

  // Operator Linebreak
  // http://eslint.org/docs/rules/operator-linebreak
  'operator-linebreak': ['warn', 'before'],

  // Enforce padding within blocks
  // http://eslint.org/docs/rules/padded-blocks
  'padded-blocks': ['warn', 'never'],

  // Quoting Style for Property Names
  // http://eslint.org/docs/rules/quote-props
  'quote-props': ['warn', 'as-needed'],

  // Enforce Quote Style
  // http://eslint.org/docs/rules/quotes
  'quotes': ['warn', 'single'],

  // Require JSDoc comment
  // http://eslint.org/docs/rules/require-jsdoc
  // NOTE Don't need this in most cases because we have Flow types
  'require-jsdoc': ['off', {
    require: {
      FunctionDeclaration: true,
      MethodDefinition: true,
      ClassDeclaration: true
    }
  }],

  // Enforce or Disallow Semicolons
  // http://eslint.org/docs/rules/semi
  // TODO We need the poll
  'semi': ['warn', 'never'],

  // Enforce spacing before and after semicolons
  // http://eslint.org/docs/rules/semi-spacing
  'semi-spacing': ['warn', {
    before: false,
    after: true
  }],

  // Requires object keys to be sorted
  // http://eslint.org/docs/rules/sort-keys
  // TODO This is need, but we don't have autofix
  'sort-keys': ['off', 'asc', {
    caseSensitive: true,
    natural: true
  }],

  // Variable Sorting
  // http://eslint.org/docs/rules/sort-vars
  // TODO This is need, but we don't have autofix
  'sort-vars': 'off',

  // Require Or Disallow Space Before Blocks
  // http://eslint.org/docs/rules/space-before-blocks
  'space-before-blocks': ['warn', 'always'],

  // Require or disallow a space before function parenthesis
  // http://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': ['warn', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always'
  }],

  // Disallow or enforce spaces inside of parentheses
  // http://eslint.org/docs/rules/space-in-parens
  'space-in-parens': ['warn', 'never'],

  // Require Spaces Around Infix Operators
  // http://eslint.org/docs/rules/space-infix-ops
  'space-infix-ops': 'warn',

  // Require or disallow spaces before/after unary operators
  // http://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': ['warn', {
    words: true,
    nonwords: false
  }],

  // Requires or disallows a whitespace (space or tab) beginning a comment
  // http://eslint.org/docs/rules/spaced-comment
  'spaced-comment': ['warn', 'always', {
    line: { exceptions: ['-'] },
    block: {
      balanced: true,
      exceptions: ['*']
    }
  }],

  // Require or disallow the Unicode Byte Order Mark (BOM)
  // http://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['warn', 'never'],

  // Require Regex Literals to be Wrapped
  // http://eslint.org/docs/rules/wrap-regex
  'wrap-regex': 'warn'
};