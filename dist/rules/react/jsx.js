'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const INDENT_SIZE = 2;

exports.default = {

  // Enforce boolean attributes notation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['warn', 'never'],

  // Validate closing bracket location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // TODO Check allowMultiline true/false
  'react/jsx-curly-spacing': ['warn', 'never', {
    allowMultiline: true,
    spacing: { objectLiterals: 'never' }
  }],

  // Enforce or disallow spaces around equal signs in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  'react/jsx-equals-spacing': ['warn', 'never'],

  // Restrict file extensions that may contain JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

  // Enforce position of the first prop in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  'react/jsx-first-prop-new-line': ['warn', 'multiline'],

  // Enforce event handler naming conventions in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': ['warn', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on'
  }],

  // Validate JSX indentation
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  'react/jsx-indent': ['warn', INDENT_SIZE],

  // Validate props indentation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'react/jsx-indent-props': ['warn', INDENT_SIZE],

  // Validate JSX has key prop when in array or iterator
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': 'error',

  // Limit maximum of props on a single line in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'react/jsx-max-props-per-line': ['warn', {
    maximum: 2,
    when: 'multiline'
  }],

  // Prevent usage of `.bind()` and arrow functions in JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': ['error', {
    ignoreRefs: false,
    allowArrowFunctions: false,
    allowBind: false
  }],

  // Prevent comments from being inserted as text nodes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',

  // Prevent duplicate props in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

  // Prevent usage of unwrapped JSX strings
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  // NOTE For now literals is escaped in dev bundle https://github.com/babel/babel/issues/4909
  'react/jsx-no-literals': 'warn',

  // Prevent usage of unsafe `target='_blank'`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': 'error',

  // Disallow undeclared variables in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': ['error', { allowAllCaps: false }],

  // Enforce props alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': ['warn', {
    callbacksLast: true,
    ignoreCase: false,
    noSortAlphabetically: false,
    shorthandFirst: true,
    shorthandLast: false
  }],

  // Validate spacing before closing bracket in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
  'react/jsx-space-before-closing': ['warn', 'always'],

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  'react/jsx-tag-spacing': ['warn', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never'
  }],

  // Prevent React to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': 'error',

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  'react/jsx-wrap-multilines': ['warn', {
    declaration: true,
    assignment: true,
    return: true
  }]
};