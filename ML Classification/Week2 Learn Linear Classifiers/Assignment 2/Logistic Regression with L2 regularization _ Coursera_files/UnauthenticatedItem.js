define("bundles/unauthenticated/components/UnauthenticatedItem",["require","exports","module","react-with-addons","bundles/phoenix/template/models/userAuthorization","i18n!nls/unauthenticated","css!./__styles__/UnauthenticatedItem"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(a,u,l){var n=!0;e:for(;n;){var t=a,i=u,c=l;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;a=o,u=i,l=c,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(c)}},e=require("react-with-addons"),r=require("bundles/phoenix/template/models/userAuthorization"),t=require("i18n!nls/unauthenticated");require("css!./__styles__/UnauthenticatedItem");var a=function(a){function UnauthenticatedItem(){_classCallCheck(this,UnauthenticatedItem),o(Object.getPrototypeOf(UnauthenticatedItem.prototype),"constructor",this).apply(this,arguments),this.onLogInButtonClick=function(){r.ensureAuthenticated({mode:"login"})}}return _inherits(UnauthenticatedItem,a),n(UnauthenticatedItem,[{key:"componentDidMount",value:function componentDidMount(){this.onLogInButtonClick()}},{key:"render",value:function render(){return e.createElement("div",{className:"c-open-single-page c-unauthenticated rc-UnauthenticatedItem"},e.createElement("div",{className:"bt3-row title-row"},e.createElement("div",{className:"bt3-col-md-12"},e.createElement("h2",{className:"headline-4-text"},t("Please log in to view this content.")))),e.createElement("div",{className:"bt3-row c-open-single-page-start-area"},e.createElement("div",{className:"bt3-col-md-4"},e.createElement("button",{className:"primary bt3-btn-block c-call-to-action-btn",onClick:this.onLogInButtonClick},t("Log In")))))}}]),UnauthenticatedItem}(e.Component);module.exports=a});