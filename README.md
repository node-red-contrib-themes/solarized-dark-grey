# DEPRECATED REPOSITORY

This theme is now maintained at https://github.com/ristomatti/node-red-contrib-theme-solarized-dark-grey

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

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Install this package.

```shell
npm install @node-red-contrib-themes/solarized-dark-grey
```

Add the following to the `editorTheme` section of your `settings.js`.

```js
editorTheme: {
    page: {
        css: [
            "<HOME>/.node-red/node_modules/@node-red-contrib-themes/solarized-dark-grey/solarized-dark-grey.css",
            "<HOME>/.node-red/node_modules/@node-red-contrib-themes/solarized-dark-grey/solarized-dark-grey-nodes.css"
        ],
        scripts: [
            "<HOME>/.node-red/node_modules/@node-red-contrib-themes/solarized-dark-grey/theme-tomorrow.js",
            "<HOME>/.node-red/node_modules/@node-red-contrib-themes/solarized-dark-grey/solarized-dark-grey.js"
        ]
    }
}
```

Replace `<HOME>` with the home directory of the user running Node-RED. For
example, `/home/username`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Restart Node-RED.

Enjoy!

## Update

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Update this package.

```shell
npm update @node-red-contrib-themes/solarized-dark-grey
```

Reload the Node-RED page on the web browser.

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
