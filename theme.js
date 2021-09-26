module.exports = function(RED) {
  RED.plugins.registerPlugin('solarized-dark-grey', {
    type: 'node-red-theme',
    css: [
      'theme.min.css',
      'theme-nodes.css'
    ],
    scripts: [
      'ace-editor-theme.js',
      'ace-editor-config.js'
    ]
  });
};
