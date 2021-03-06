"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/ripple/dist/mdc.ripple");

require("@material/button/dist/mdc.button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * MD Component: Button
 *
 * @param {Array} classes Overrides Class
 * @param {Object} children Node Content
 * @param {Boolean} dense Dense Style
 * @param {Boolean} disabled Available State
 * @param {Function} onClick Click Trigger
 * @param {Boolean} outlined Outlined Style
 * @param {Boolean} raised Raised Style
 * @param {Boolean} unelevated Unelevated Style
 */
var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCRipple(this.mdButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          children = _this$props.children,
          dense = _this$props.dense,
          disabled = _this$props.disabled,
          _onClick = _this$props.onClick,
          outlined = _this$props.outlined,
          raised = _this$props.raised,
          unelevated = _this$props.unelevated; // Class(es)

      var mdcDense = 'mdc-button--dense';
      var mdcOutlined = 'mdc-button--outlined';
      var mdcRaised = 'mdc-button--raised';
      var mdcUnelevated = 'mdc-button--unelevated';
      return _react.default.createElement("button", {
        ref: function ref(element) {
          _this.mdButton = element;
        },
        className: _classnames.default.apply(void 0, ['mdc-button', _defineProperty({}, mdcDense, dense), _defineProperty({}, mdcOutlined, outlined), _defineProperty({}, mdcRaised, raised), _defineProperty({}, mdcUnelevated, unelevated)].concat(_toConsumableArray(classes))),
        onClick: function onClick() {
          return _onClick();
        },
        disabled: disabled
      }, children);
    }
  }]);

  return Button;
}(_react.PureComponent);

Button.defaultProps = {
  classes: [],
  dense: false,
  disabled: false,
  onClick: function onClick() {},
  outlined: false,
  raised: false,
  unelevated: false
};
Button.propTypes = {
  classes: _propTypes.array,
  children: _propTypes.node,
  dense: _propTypes.bool,
  disabled: _propTypes.bool,
  onClick: _propTypes.func,
  outlined: _propTypes.bool,
  raised: _propTypes.bool,
  unelevated: _propTypes.bool
};
var _default = Button;
exports.default = _default;