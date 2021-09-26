ace.define('ace/theme/tomorrow', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {

  exports.isDark = true;
  exports.cssClass = 'ace-solarized_dark_grey';
  exports.cssText = `.ace-solarized_dark_grey .ace_gutter {
background: #212121;
color: #657b83
}
.ace-solarized_dark_grey .ace_print-margin {
width: 1px;
background: #212121
}
.ace-solarized_dark_grey {
font-family: "Fira Code", monospace;
-webkit-font-feature-settings: "liga" on,"calt" on;
font-feature-settings: "liga" on,"calt" on;
background-color: #141414;
color: #93A1A1
}
.ace-solarized_dark_grey .ace_entity.ace_other.ace_attribute-name{
color: #93A1A1
}
.ace-solarized_dark_grey .ace_cursor{
color: #eee8d5
}
.ace-solarized_dark_grey .ace_string.ace_regexp {
color: #cb4b16
}
.ace-solarized_dark_grey .ace_marker-layer .ace_active-line,
.ace-solarized_dark_grey .ace_marker-layer .ace_selection {
background: rgba(255, 255, 255, 0.1)
}
.ace-solarized_dark_grey.ace_multiselect .ace_selection.ace_start {
box-shadow: 0 0 3px 0px #002B36;
}
.ace-solarized_dark_grey .ace_marker-layer .ace_step {
background: rgb(102, 82, 0)
}
.ace-solarized_dark_grey .ace_marker-layer .ace_bracket {
margin: -1px 0 0 -1px;
border: 1px solid rgba(147, 161, 161, 0.50)
}
.ace-solarized_dark_grey .ace_gutter-active-line {
background-color: #0d3440
}
.ace-solarized_dark_grey .ace_marker-layer .ace_selected-word {
border: 1px solid #073642
}
.ace-solarized_dark_grey .ace_invisible {
color: rgba(147, 161, 161, 0.50)
}
.ace-solarized_dark_grey .ace_line,
.ace-solarized_dark_grey .ace_markup {
color: #93a1a1;
}
.ace-solarized_dark_grey .ace_keyword,
.ace-solarized_dark_grey .ace_meta,
.ace-solarized_dark_grey .ace_storage,
.ace-solarized_dark_grey .ace_support.ace_class,
.ace-solarized_dark_grey .ace_support.ace_type {
color: #93a1a1;
font-weight: bold
}
.ace-solarized_dark_grey .ace_constant.ace_character,
.ace-solarized_dark_grey .ace_constant.ace_other {
color: #CB4B16
}
.ace-solarized_dark_grey .ace_constant.ace_language {
color: #B58900
}
.ace-solarized_dark_grey .ace_constant.ace_numeric {
color: #D33682
}
.ace-solarized_dark_grey .ace_fold {
background-color: #268BD2;
border-color: #93A1A1
}
.ace-solarized_dark_grey .ace_entity.ace_name.ace_function,
.ace-solarized_dark_grey .ace_punctuation ~ .ace_support.ace_function,
.ace-solarized_dark_grey .ace_support.ace_function {
color: #b58900
}
.ace-solarized_dark_grey .ace_entity.ace_name.ace_tag,
.ace-solarized_dark_grey .ace_variable {
color: #93a1a1
}
.ace-solarized_dark_grey .ace_paren.ace_lparen,
.ace-solarized_dark_grey .ace_paren.ace_rparen {
color: #839496
}
.ace-solarized_dark_grey .ace_variable.ace_language {
color: #93a1a1;
font-weight: bold
}
.ace-solarized_dark_grey .ace_variable.ace_parameter{
color: #cb4b16
}
.ace-solarized_dark_grey .ace_string {
color: #6c71c4
}
.ace-solarized_dark_grey .ace_comment {
font-style: italic;
color: #586e75
}
.ace-solarized_dark_grey .ace_identifier {
color: #93a1a1
}
.ace-solarized_dark_grey .ace_indent-guide {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y
}`;

  var dom = require('../lib/dom');
  dom.importCssString(exports.cssText, exports.cssClass);
});
