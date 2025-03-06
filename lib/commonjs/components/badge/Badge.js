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
  outline: 'border border-gray-800',
  secondary: ' bg-slate-800 active:bg-[#ffffff]'
};
var PairsColors = {
  "default": 'black',
  destructive: 'white',
  outline: 'white',
  secondary: 'white'
};
var StyledBadge = (0, _reactNativeCssInterop.cssInterop)(_reactNative.View, {
  className: 'style'
});
var Badge = function Badge(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'default' : _ref$color,
    icon = _ref.icon,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
    className = _ref.className,
    title = _ref.title;
  return <StyledBadge className={cn('pointer-events-none flex items-center justify-center rounded-md bg-slate-700 px-3 py-1', variants[color], icon && 'flex-row gap-2', className)}>
      {icon && iconPosition === 'left' && icon}
      <_Text.default color={PairsColors[color]} variant="semibold">
        {title}
      </_Text.default>
      {icon && iconPosition === 'right' && icon}
    </StyledBadge>;
};
var _default = exports["default"] = Badge;
//# sourceMappingURL=Badge.js.map