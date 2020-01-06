module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: [1, "never"],
    quotes: [1, "double"],
    "require-jsdoc": 0,
  },
}
