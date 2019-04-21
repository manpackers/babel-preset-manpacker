![npm](https://img.shields.io/npm/v/babel-preset-manpacker.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/babel-preset-manpacker.svg)
![npm](https://img.shields.io/npm/dw/babel-preset-manpacker.svg)
![NPM](https://img.shields.io/npm/l/babel-preset-manpacker.svg)
<br><br>
![nodei.co](https://nodei.co/npm/babel-preset-manpacker.png?downloads=true&downloadRank=true&stars=true)
<br>
## Explain
Manpacker preset based on babel7 encapsulation.<br/>
The following plug-ins are used:<br>
<code>"@babel/plugin-proposal-class-properties"</code>.<br>
<code>"@babel/plugin-proposal-decorators"</code>.<br>
<code>"@babel/plugin-syntax-dynamic-import"</code>.<br>
<code>"@babel/polyfill"</code>.<br>
<code>"babel-plugin-dynamic-import-node"</code>.<br>
Babel presets polyfill default config:<br>
```
{"useBuiltIns": "usage", corejs: 3}
```
Configuration items can be referenced: [<code>@babel/preset-env</code>](https://babeljs.io/docs/en/babel-preset-env/)

There are two attributes outside:

key|value|explain
--|--|--
decoratorsLegacy|true|plugin:"decorators"
propertiesLoose|true|plugin:"properties"

## Install
```
npm install babel-preset-manpacker -D
```
## Usage

- Add &nbsp;<code>.babelrc</code> &nbsp; file to your project. &nbsp;

Configuration content of file.

```
{
  "presets": ["manpacker"]
}
```
- You can add a configuration entry to the <code>package.json</code> file as follows.

```
"babel": {
  "presets": ["manpacker"]
}
```
Refer to the following configuration.<br>
Example: <br>
```
"babel": {
  "presets": [
    ["manpacker", {"useBuiltIns": "entry"}]
  ]
}
```
Ingress files need to be manually introduced
```
import "@babel/polyfill"
```

## Npm
[link](https://www.npmjs.com/package/babel-preset-manpacker)
