module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    include: [
      "src/**/*",
      ".eslintrc.cjs"
    ],
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs,jsx,mjs,ts,tsx}",
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
}
