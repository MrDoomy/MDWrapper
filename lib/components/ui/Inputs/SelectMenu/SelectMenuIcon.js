"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _mdc = require("@material/select/dist/mdc.select");

var _constants = require("../../../../constants");

require("@material/select/dist/mdc.select.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * MD Component: SelectMenuIcon
 * 
 * @param {String} font Material Design Icon Font
 */
var SelectMenuIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectMenuIcon, _PureComponent);

  function SelectMenuIcon() {
    _classCallCheck(this, SelectMenuIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectMenuIcon).apply(this, arguments));
  }

  _createClass(SelectMenuIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCSelectIcon(this.mdSelectMenuIcon);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var font = this.props.font;
      return _react.default.createElement("i", {
        ref: function ref(element) {
          _this.mdSelectMenuIcon = element;
        },
        className: "material-icons mdc-select__icon",
        role: "button",
        tabIndex: 0
      }, font);
    }
  }]);

  return SelectMenuIcon;
}(_react.PureComponent);

SelectMenuIcon.defaultProps = {
  font: _constants.EVENT
};
SelectMenuIcon.propTypes = {
  font: _propTypes.string
};
var _default = SelectMenuIcon;
exports.default = _default;