module.exports = function(RED) {
  RED.plugins.registerPlugin('solarized-dark-grey', {
    type: 'node-red-theme',
    css: [
      'theme.min.css',
      'theme-customizations.css',
      'theme-nodes.css',
      'theme-scrollbars.css'
    ],
    scripts: [
      'ace-editor-theme.js',
      'ace-editor-config.js'
    ]
  });
};
