"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/tab/dist/mdc.tab");

var _Icon = _interopRequireDefault(require("../Icon"));

require("@material/tab/dist/mdc.tab.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * MD Component: Tab
 * 
 * @param {Boolean} active Active
 * @param {Object} children Node Content
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 * @param {Boolean} stacked Stacked Style
 */
var Tab =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tab, _PureComponent);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCTab(this.mdTab);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          icon = _this$props.icon,
          label = _this$props.label,
          _onClick = _this$props.onClick,
          stacked = _this$props.stacked; // Class(es)

      var mdcActive = 'mdc-tab--active';
      var mdcIcon = 'mdc-tab__icon';
      var mdcStacked = 'mdc-tab--stacked';
      return _react.default.createElement("button", {
        ref: function ref(element) {
          _this.mdTab = element;
        },
        className: (0, _classnames.default)('mdc-tab', _defineProperty({}, mdcActive, active), _defineProperty({}, mdcStacked, stacked)),
        role: "tab",
        "aria-selected": active,
        onClick: function onClick() {
          return _onClick();
        },
        tabIndex: 0
      }, _react.default.createElement("span", {
        className: "mdc-tab__content"
      }, icon && _react.default.createElement(_Icon.default, {
        classes: [mdcIcon],
        font: icon
      }), label && _react.default.createElement("span", {
        className: "mdc-tab__text-label"
      }, label)), children, _react.default.createElement("span", {
        className: "mdc-tab__ripple"
      }));
    }
  }]);

  return Tab;
}(_react.PureComponent);

Tab.defaultProps = {
  active: false,
  onClick: function onClick() {},
  stacked: false
};
Tab.propTypes = {
  active: _propTypes.bool,
  children: _propTypes.node,
  icon: _propTypes.string,
  label: _propTypes.string,
  onClick: _propTypes.func,
  stacked: _propTypes.bool
};
var _default = Tab;
exports.default = _default;