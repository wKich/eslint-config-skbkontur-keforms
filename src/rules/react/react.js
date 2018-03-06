export default {
  // Enforces consistent naming for boolean props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  'react/boolean-prop-naming': [
    'warn',
    {
      propTypeNames: ['bool'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
    },
  ],

  // Prevent usage of `button` elements without an explicit `type` attribute
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  'react/button-has-type': 'off',

  // Prevent extraneous defaultProps on components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  'react/default-props-match-prop-types': ['warn', { allowRequiredDefaults: false }],

  // Rule enforces consistent usage of destructuring assignment in component
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': ['warn', 'always'],

  // Prevent missing displayName in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': ['warn', { ignoreTranspilerName: false }],

  // Forbid certain props on Components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  'react/forbid-component-props': ['warn', { forbid: ['className', 'style'] }],

  // Forbid certain props on DOM Nodes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': ['warn', { forbid: [] }],

  // Forbid certain elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  'react/forbid-elements': ['error', { forbid: [] }],

  // Forbid certain propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': [
    'warn',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Forbid foreign propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  'react/forbid-foreign-prop-types': 'warn',

  // Prevent using `this.state` within a `this.setState`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',

  // Prevent using Array index in `key` props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'error',

  // Prevent passing children as props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',

  // Prevent usage of dangerous JSX properties
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'error',

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',

  // Prevent usage of deprecated methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': 'warn',

  // Prevent usage of `setState` in `componentDidMount`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  'react/no-did-mount-set-state': 'error',

  // Prevent usage of `setState` in `componentDidUpdate`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': 'error',

  // Prevent direct mutation of `this.state`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'error',

  // Prevent usage of `findDOMNode`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'error',

  // Prevent usage of `isMounted`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': ['warn', { ignoreStateless: true }],

  // Prevent usage of `shouldComponentUpdate` when extending `React.PureComponent`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',

  // Prevent usage of the return value of `React.render`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',

  // Prevent usage of `setState`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  'react/no-set-state': 'off',

  // Prevents common typos
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  'react/no-typos': 'error',

  // Prevent using string references in `ref` attribute
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',

  // Prevent using this in stateless functional components
  'react/no-this-in-sfc': 'error',

  // Prevent invalid characters from appearing in markup
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': 'error',

  // Prevent usage of unknown DOM property
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',

  // Prevent definitions of unused prop types
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  'react/no-unused-prop-types': [
    'warn',
    {
      customValidators: [],
      skipShapeProps: false,
    },
  ],

  // Prevent definition of unused state fields
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  'react/no-unused-state': 'error',

  // Prevent usage of `setState` in `componentWillUpdate`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',

  // Enforce ES5 or ES6 class for React Components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['warn', 'always'],

  // Enforce stateless React Components to be written as a pure function
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': [
    'warn',
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],

  // Prevent missing `React` when using JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'error',

  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],

  // Enforce React components to have a shouldComponentUpdate method
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  'react/require-optimization': ['warn', { allowDecorators: [] }],

  // Enforce ES5 or ES6 class for returning value in render function
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': ['warn', { component: true, html: false }],

  // Enforce component methods order
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  'react/sort-comp': [
    'warn',
    {
      order: [
        'type-annotations',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'getters',
        'setters',
        'instance-methods',
        'everything-else',
        '/^handle.+$/',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
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
          'componentWillUnmount',
        ],
      },
    },
  ],

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': [
    'warn',
    {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
      sortShapeProp: true,
    },
  ],

  // Enforce style prop value being an object
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'error',

  // Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error',
}
