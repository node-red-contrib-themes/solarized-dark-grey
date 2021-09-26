# Solarized Dark Grey Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

## About

A dark theme for [Node-RED][node-red] inspired by [Solarized color palette][solarized] by [Ethan Schoonover][schoonover].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/solarized-dark-grey/master/images/screenshot.png)

## Install

### Using Node-RED admin CLI

```shell
node-red admin install @node-red-contrib-themes solarized-dark-grey
```

Restart Node-RED.

### Using npm

Change to your Node-RED `userDir` (usually `~/.node-red`)

```shell
cd ~/.node-red
```

Install from [npm](https://npmjs.com)

```shell
npm install @node-red-contrib-themes/solarized-dark-grey
```

Add the following to the `editorTheme` section of your `settings.js`*

```js
editorTheme: {
    theme: "solarized-dark-grey"
},
```

Restart Node-RED.

*) For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

## Acknowledgments

- [Ethan Schoonover][schoonover] - for the awesome Solarized color palette.
- [Mauricio Bonani][bonanitech] - for his help with pushing me to publish the theme.

## License

[MIT][license]

[commits-shield]: https://img.shields.io/github/commit-activity/y/node-red-contrib-themes/solarized-dark-grey
[commits]: https://github.com/node-red-contrib-themes/solarized-dark-grey/commits/master
[solarized]: https://ethanschoonover.com/solarized/
[schoonover]: https://ethanschoonover.com
[last-commit-shield]: https://img.shields.io/github/last-commit/node-red-contrib-themes/solarized-dark-grey.svg
[license]: https://github.com/node-red-contrib-themes/solarized-dark-grey/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/solarized-dark-grey.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/solarized-dark-grey
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/solarized-dark-grey.png
[bonanitech]: https://github.com/bonanitech
