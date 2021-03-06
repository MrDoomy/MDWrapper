"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("@material/card/dist/mdc.card.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: CardActionButtons
 *
 * @param {Object} children Node Content
 */
var CardActionButtons = function CardActionButtons(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "mdc-card__action-buttons"
  }, children);
};

CardActionButtons.propTypes = {
  children: _propTypes.node
};
var _default = CardActionButtons;
exports.default = _default;