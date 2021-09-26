module.exports = function(RED) {
  RED.plugins.registerPlugin('solarized-dark-grey', {
    type: 'node-red-theme',
    css: [
      'solarized-dark-grey.css',
      'solarized-dark-grey-nodes.css'
    ],
    scripts: [
      'theme-tomorrow.js',
      'solarized-dark-grey.js'
    ]
  });
};
