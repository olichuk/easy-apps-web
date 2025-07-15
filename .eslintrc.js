module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/prop-types": "off", // Отключаем prop-types, так как используем TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off", // При необходимости
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: {
      version: "detect", // Автоматическое определение версии React
    },
  },
};
