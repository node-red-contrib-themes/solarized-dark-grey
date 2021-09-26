(function(ace) {
  const edit = ace.edit;

  ace.config.set('themePath', '/theme/scripts');

  ace.edit = function() {
    const editor = edit.apply(this, arguments);
    editor.getSession().setTabSize(2);
    return editor;
  }
})(ace);
