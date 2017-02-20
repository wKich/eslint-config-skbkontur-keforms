import fs from 'fs'
import path from 'path'
import semver from 'semver'

const eslintPackageJsonPath = path.join(require.resolve('eslint'), '../../package.json')
let eslintVersion = null

try {
  // eslint-disable-next-line no-sync
  ({ version: eslintVersion } = JSON.parse(fs.readFileSync(eslintPackageJsonPath)))
} catch (ignoreGetVersionError) {
  // Empty
}

// TODO Check eslint-plugin rules version

const rules = { 'template-tag-spacing': '>= 3.15.0' }

export function check(ruleName, body) {
  // NOTE For now checking don't support handle options changes correctly
  if (semver.satisfies(eslintVersion, rules[ruleName]) || !rules[ruleName]) {
    return { [ruleName]: body }
  }

  return {}
}

export default { check }
