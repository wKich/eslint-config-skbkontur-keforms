export default {
  // Ensure imports point to a file/module that can be resolved
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, amd: true }],

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
  'import/no-restricted-paths': 'off',

  // Forbid import of modules using absolute paths
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'error',

  // Forbid `require()` calls with expressions
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'error',

  // Prevent importing the submodules of other modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  'import/no-internal-modules': 'off',

  // Forbid Webpack loader syntax in imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'error',

  // Forbid a module from importing itself
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
  'import/no-self-import': 'error',
}
