export default {

  // Prevent missing displayName in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': [ 'warn', { ignoreTranspilerName: false } ],

  // Forbid certain propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': [ 'warn', {
    forbid: [
      'any',
      'array',
      'object'
    ]
  } ],

  // Prevent comments from being inserted as text nodes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-comment-textnodes.md
  'react/no-comment-textnodes': 'error',

  // Prevent usage of dangerous JSX properties
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'error',

  // Prevent usage of deprecated methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': 'warn',

  // Prevent usage of `setState` in `componentDidMount`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  'react/no-did-mount-set-state': [ 'error', 'allow-in-func' ],

  // Prevent usage of `setState` in `componentDidUpdate`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': [ 'error', 'allow-in-func' ],

  // Prevent direct mutation of `this.state`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'error',

  // Prevent usage of `isMounted`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  // TODO Check if need or not
  'react/no-multi-comp': [ 'warn', { ignoreStateless: false } ],

  // Prevent usage of the return value of `React.render`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',

  // Prevent usage of `setState`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  // TODO Change to 'error' when use Redux/Reelm in project
  'react/no-set-state': 'off',

  // Prevent using string references in `ref` attribute
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',

  // Prevent usage of unknown DOM property
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',

  // Enforce ES5 or ES6 class for React Components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': [ 'off', 'always' ],

  // Enforce stateless React Components to be written as a pure function
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': 'error',

  // Prevent missing props validation in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': [ 'warn', {
    ignore: [],
    customValidators: []
  } ],

  // Prevent missing `React` when using JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'error',

  // Restrict file extensions that may be required
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
  'react/require-extension': [ 'error', {
    extensions: [ '.js', '.jsx' ]
  } ],

  // Enforce React components to have a shouldComponentUpdate method
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  // TODO Do we need use this
  'react/require-optimization': 'warn',

  // Enforce ES5 or ES6 class for returning value in render function
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': [ 'error', {
    component: true,
    html: false
  } ],

  // Enforce component methods order
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  'react/sort-comp': [ 'warn', {
    order: [
      'static-methods',
      'lifecycle',
      'everything-else',
      '/^on.+$/',
      'rendering'
    ],
    groups: {
      rendering: [
        '/^render.+$/',
        'render'
      ],
      lifecycle: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
      ]
    }
  } ],

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': [ 'warn', {
    callbacksLast: true,
    ignoreCase: false,
    requiredFirst: true
  } ],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
  'react/wrap-multilines': [ 'warn', {
    declaration: true,
    assignment: true,
    return: true
  } ]
}
