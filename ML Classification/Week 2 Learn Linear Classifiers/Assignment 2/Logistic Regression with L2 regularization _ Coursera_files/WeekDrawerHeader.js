define("bundles/ondemand/components/item/WeekDrawerHeader",["require","exports","module","react-with-addons","bundles/page/components/TrackedLink2","bundles/iconfont/Icon","bundles/ondemand/utils/url","js/lib/coursera.react-intl","i18n!nls/ondemand","css!./__styles__/WeekDrawerHeader"],function(require,exports,module){"use strict";function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),n=0;n<a.length;n++){var r=a[n],t=Object.getOwnPropertyDescriptor(o,r);t&&t.configurable&&void 0===e[r]&&Object.defineProperty(e,r,t)}return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):_defaults(n,e))}var t=function(){function defineProperties(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(e,n,r){return n&&defineProperties(e.prototype,n),r&&defineProperties(e,r),e}}(),o=function get(a,c,i){var r=!0;e:for(;r;){var n=a,s=c,u=i;r=!1,null===n&&(n=Function.prototype);var e=Object.getOwnPropertyDescriptor(n,s);if(void 0===e){var t=Object.getPrototypeOf(n);if(null===t)return void 0;a=t,c=s,i=u,r=!0,e=t=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(u)}},e=require("react-with-addons"),a=require("bundles/page/components/TrackedLink2"),r=a.TrackedReactLink,s=require("bundles/iconfont/Icon"),u=require("bundles/ondemand/utils/url"),c=u.getWeekUrl,i=require("js/lib/coursera.react-intl"),l=i.FormattedMessage,n=require("i18n!nls/ondemand");require("css!./__styles__/WeekDrawerHeader");var p=function(a){function WeekDrawerHeader(){_classCallCheck(this,WeekDrawerHeader),o(Object.getPrototypeOf(WeekDrawerHeader.prototype),"constructor",this).apply(this,arguments)}return _inherits(WeekDrawerHeader,a),t(WeekDrawerHeader,[{key:"render",value:function render(){var t=this.props,o=t.weekNumber,a=t.lessonNumber,u=t.numLessons;return e.createElement("div",{className:"rc-WeekDrawerHeader"},e.createElement(r,{href:c(o),className:"flex-1 week-link",trackingName:"item_side_nav_week",data:{week:this.props.weekNumber}},e.createElement("h1",{className:"body-2-text week-name"},e.createElement(s,{name:"chevron-left",className:"back-icon"}),e.createElement("span",null,n("All Course Content")))),e.createElement("hr",{className:"top-divider"}),e.createElement("p",{className:"lesson-number caption-text color-secondary-text"},e.createElement(l,{message:n("Lesson {number} of {numLessons}:"),number:a,numLessons:u})))}}],[{key:"propTypes",value:{weekNumber:e.PropTypes.number.isRequired,lessonNumber:e.PropTypes.number.isRequired,numLessons:e.PropTypes.number.isRequired},enumerable:!0},{key:"contextTypes",value:{track:e.PropTypes.func.isRequired},enumerable:!0}]),WeekDrawerHeader}(e.Component);module.exports=p});