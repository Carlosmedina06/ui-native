"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = require("clsx");
var _reactNative = require("react-native");
var _reactNativeCssInterop = require("react-native-css-interop");
var _tailwindMerge = require("tailwind-merge");
var _Text = _interopRequireDefault(require("../text/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return (0, _tailwindMerge.twMerge)((0, _clsx.clsx)(inputs));
}
var variants = {
  "default": 'bg-[#ffffff] active:bg-[#000000]',
  destructive: 'bg-[#d72638]',
  outline: 'border border-[#343434] active:bg-[#343434]',
  secondary: 'bg-[#000000] active:bg-[#ffffff]',
  ghost: 'bg-none',
  ghostDark: 'bg-none'
};
var PairsColors = {
  "default": 'black',
  destructive: 'white',
  outline: 'gray',
  secondary: 'white',
  ghost: 'black',
  ghostDark: 'white'
};
var sizes = {
  "default": 'h-12 px-5 py-3 rounded-md',
  sm: 'h-8 px-3 py-3 rounded-md',
  lg: 'h-16 px-6 py-4 rounded-lg'
};
var StyledButton = (0, _reactNativeCssInterop.cssInterop)(_reactNative.TouchableOpacity, {
  className: 'style'
});
var Button = function Button(_ref) {
  var onPress = _ref.onPress,
    className = _ref.className,
    style = _ref.style,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    textColor = _ref.textColor;
  return <StyledButton className={cn("aling-center  flex justify-center", variants[variant], sizes[size], className)} style={style} onPress={onPress}>
      <_Text.default children="Open App.tsx" color={textColor ? textColor : PairsColors[variant]} variant="semibold" />
    </StyledButton>;
};
var _default = exports["default"] = Button;
//# sourceMappingURL=Button.js.map