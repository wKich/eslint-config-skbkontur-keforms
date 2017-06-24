## How to use

[![Greenkeeper badge](https://badges.greenkeeper.io/wKich/eslint-config-skbkontur-keforms.svg)](https://greenkeeper.io/)

- Run `npm install eslint-config-skbkontur-keforms`
- Extend your local `.eslintrc.json` config:

  ```
  {
    "extends": [ "eslint-config-skbkontur-keforms" ]
  }
  ```
- (Optional) Setup plugins for your favorite code editor
- (Note) You need to install `eslint-import-resolver-webpack` if you use
webpack alias in your project

## TODO

- [x] Publish package in npm repository
- [ ] Add util for check eslint rules updates
- [ ] Tune `eslint-plugin-import` rules
- [x] Check all rules for `eslint-plugin-babel`
- [ ] Add `eslint-plugin-jsdoc`
- [x] Add `eslint-plugin-flowtype`
- [ ] Separate rules pack for custom extending
