<div align="center">
  <a href="https://jestjs.io/">
    <img width="200" height="200"
      src="https://jestjs.io/img/jest.png">
  </a>
</div>


# Canjs Stache template transformer for Jestjs

## Install

```shell
npm install can-stache-transform --save-dev
```

## Jest configuration:

```js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [
        "/node_modules/(?!can)"
    ],
    moduleFileExtensions: ["js", "stache"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
        "^.+\\.stache$": './stache-transformer.js',
    },
}
```