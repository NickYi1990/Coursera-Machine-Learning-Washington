define("bundles/ondemand/components/item/ItemNavigation",["require","exports","module","react-with-addons","bundles/ondemand/appContextSingleton","js/lib/ReactRouterAdapter","js/lib/retracked","pages/open-course/common/constants","bundles/ondemand/components/item/ItemNavTabs","bundles/ondemand/components/item/WeekDrawer","js/lib/coursera.store","pages/open-course/common/models/lesson","css!./__styles__/ItemNavigation"],function(require,exports,module){"use strict";function _defaults(e,o){for(var s=Object.getOwnPropertyNames(o),t=0;t<s.length;t++){var r=s[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var l=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(s,c,u){var r=!0;e:for(;r;){var t=s,a=c,i=u;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;s=n,c=a,u=i,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},e=require("react-with-addons"),s=require("bundles/ondemand/appContextSingleton"),a=require("js/lib/ReactRouterAdapter"),n=require("js/lib/retracked"),i=require("pages/open-course/common/constants"),c=require("bundles/ondemand/components/item/ItemNavTabs"),u=require("bundles/ondemand/components/item/WeekDrawer"),t=require("js/lib/coursera.store"),p=require("pages/open-course/common/models/lesson"),r="itemNavCollapsed";require("css!./__styles__/ItemNavigation");var m=function(m){function ItemNavigation(){var e=this;_classCallCheck(this,ItemNavigation),o(Object.getPrototypeOf(ItemNavigation.prototype),"constructor",this).apply(this,arguments),this.state={showDrawer:!t.get(r)},this.onTriggerClick=function(){e.state.showDrawer?(e.setState({showDrawer:!1}),t.set(r,!0)):(e.setState({showDrawer:!0}),t.set(r,!1))}}return _inherits(ItemNavigation,m),l(ItemNavigation,[{key:"getChildContext",value:function getChildContext(){return{track:this.track,router:a.rr}}},{key:"componentWillMount",value:function componentWillMount(){this.track=n.makeTracker({namespace:"open_course_home",include:{open_course_id:i.courseId,open_course_slug:function open_course_slug(){var t=s.getComponentContext().getStore("CourseStore"),e=t.getMetadata();if(e)return e.get("slug")}}})}},{key:"render",value:function render(){var t=e.createElement("div",{className:"c-main-content-container","data-js":"item-container"});return e.createElement("div",{className:"rc-ItemNavigation"},e.createElement(c,{showDrawer:this.state.showDrawer,onLessonsClick:this.onTriggerClick}),e.createElement("div",{className:"horizontal-box week-drawer-container"},e.createElement(u,{weekNumber:this.props.weekNumber,currentItemId:this.props.currentItemId,currentLesson:this.props.currentLesson,showDrawer:this.state.showDrawer}),this.props.children||t))}}],[{key:"propTypes",value:{weekNumber:e.PropTypes.number.isRequired,currentItemId:e.PropTypes.string.isRequired,currentLesson:e.PropTypes.instanceOf(p).isRequired,children:e.PropTypes.node},enumerable:!0},{key:"childContextTypes",value:{track:e.PropTypes.func.isRequired,router:e.PropTypes.func.isRequired},enumerable:!0}]),ItemNavigation}(e.Component);module.exports=m});