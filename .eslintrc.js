// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 指定腳本的運行環境
  // 每種環境都有一組特定的預定義全局變量
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // 啟用的規則及各自的錯誤級別
    // 0: 關閉規則, 1: 開啟規則[warn], 2: 開啟規則[error]-程序會退出

    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 分號結尾
    // semi: ['error', 'always'],
    // 函數宣告時，括號前不要加空白。
    'space-before-function-paren': 0
  },
  // 當訪問未定義的變量時，no-undef 規則將發出警告
  // 因此需定義腳本在執行期間訪問的額外的全局變量
  // true 允許變量被重寫, false 不允許被重寫
  globals: {
    _: true,
    vuex: true
  }
}
