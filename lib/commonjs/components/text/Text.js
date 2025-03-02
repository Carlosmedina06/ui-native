"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
var _reactNativeCssInterop = require("react-native-css-interop");
var _clsx = require("clsx");
var _tailwindMerge = require("tailwind-merge");
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return (0, _tailwindMerge.twMerge)((0, _clsx.clsx)(inputs));
}
var variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  p: 'text-base',
  inline: 'font-mono bg-gray-200 px-1 rounded',
  lead: 'text-lg text-gray-700',
  large: 'text-lg font-semibold',
  small: 'text-sm',
  muted: 'text-gray-500',
  "default": 'text-black',
  bold: 'font-bold',
  semibold: 'font-semibold'
};
var colors = {
  black: 'text-black',
  white: 'text-white',
  gray: 'text-gray-500'
};
var StyledText = (0, _reactNativeCssInterop.cssInterop)(_reactNative.Text, {
  className: 'style'
});
var Text = function Text(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color;
  return <StyledText className={cn(variants[variant], colors[color], className)} style={style}>
      {children}
    </StyledText>;
};
var _default = exports["default"] = Text;
//# sourceMappingURL=Text.js.map