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
var variants = {
  "default": 'bg-primary text-primary-foreground shadow-xs',
  destructive: 'bg-destructive text-white shadow-xs',
  outline: 'border border-input bg-background shadow-xs',
  secondary: 'bg-secondary text-secondary-foreground shadow-xs',
  link: 'text-primary underline-offset-4'
};
var sizes = {
  "default": 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md gap-1.5 px-3',
  lg: 'h-10 rounded-md px-6'
};
var StyledButton = (0, _reactNativeCssInterop.cssInterop)(_reactNative.TouchableOpacity, {
  className: 'style'
});
var Button = function Button(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    className = _ref.className,
    style = _ref.style,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size;
  return <StyledButton className={(0, _cn["default"])('', variants[variant], sizes[size], className)} style={style} onPress={onPress}>
      <_reactNative.Text>{title}</_reactNative.Text>
    </StyledButton>;
};
var _default = exports["default"] = Button;
//# sourceMappingURL=Button.js.map