"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/radio/dist/mdc.radio");

var _FormField = _interopRequireDefault(require("./FormField"));

require("@material/radio/dist/mdc.radio.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * MD Component: Radio
 *
 * @param {Boolean} checked Default Value
 * @param {Boolean} disabled Available State
 * @param {String} label Label
 * @param {String} name Reference
 * @param {Function} onChange Change Trigger
 */
var Radio =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "generateId", function (base) {
      return base.trim().toLowerCase();
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCRadio(this.mdRadio);
    }
    /**
     * Generate ID For Input & Label
     * 
     * @param {String} base Whatever U Want
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          label = _this$props.label,
          name = _this$props.name,
          _onChange = _this$props.onChange; // Class(es)

      var mdcDisabled = 'mdc-radio--disabled'; // Attribute(s)

      var attrId = label ? {
        'id': "".concat(this.generateId(label))
      } : {};
      return _react.default.createElement(_FormField.default, null, _react.default.createElement("div", {
        ref: function ref(element) {
          _this2.mdRadio = element;
        },
        className: (0, _classnames.default)('mdc-radio', _defineProperty({}, mdcDisabled, disabled))
      }, _react.default.createElement("input", _extends({
        className: "mdc-radio__native-control"
      }, attrId, {
        name: name,
        type: "radio",
        defaultChecked: checked,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        disabled: disabled
      })), _react.default.createElement("div", {
        className: "mdc-radio__background"
      }, _react.default.createElement("div", {
        className: "mdc-radio__outer-circle"
      }), _react.default.createElement("div", {
        className: "mdc-radio__inner-circle"
      }))), label && _react.default.createElement("label", {
        htmlFor: this.generateId(label)
      }, label));
    }
  }]);

  return Radio;
}(_react.PureComponent);

Radio.defaultProps = {
  checked: false,
  disabled: false,
  name: 'default',
  onChange: function onChange() {}
};
Radio.propTypes = {
  checked: _propTypes.bool,
  disabled: _propTypes.bool,
  label: _propTypes.string,
  name: _propTypes.string,
  onChange: _propTypes.func
};
var _default = Radio;
exports.default = _default;