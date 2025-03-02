"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeCssInterop = require("react-native-css-interop");
var _cn = _interopRequireDefault(require("../../utils/cn"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var StyledButton = (0, _reactNativeCssInterop.cssInterop)(_reactNative.TouchableOpacity, {
  className: 'style'
});
var Button = function Button(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    className = _ref.className,
    style = _ref.style;
  return <StyledButton className={(0, _cn["default"])('rounded-md bg-blue-500  px-5 py-3  text-white ', className)} style={style} onPress={onPress}>
      <_reactNative.Text>{title}</_reactNative.Text>
    </StyledButton>;
};
var _default = exports["default"] = Button;
//# sourceMappingURL=Button.js.map