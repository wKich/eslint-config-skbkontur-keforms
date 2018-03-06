import help from './help'
import modules from './modules'
import statics from './statics'
import style from './style'

export default {
  ...help,
  ...modules,
  ...statics,
  ...style,

  // TODO Move this rule after docs will be added
  // https://github.com/benmosher/eslint-plugin-import/issues/1032
  'import/no-useless-path-segments': 'warn',
}
