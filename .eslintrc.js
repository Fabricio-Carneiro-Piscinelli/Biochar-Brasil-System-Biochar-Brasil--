module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [ "prettier" ],
  extends: [ "airbnb", "plugin:prettier/recommended" ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 
    [1, {"extensions": [".js", ".jsx"]}],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0
  },
};