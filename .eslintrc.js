module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "plugins": ["@typescript-eslint"],

    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/ban-ts-comment": "off"
    }
};