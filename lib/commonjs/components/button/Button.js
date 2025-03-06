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
var _excluded = ["onPress", "className", "style", "variant", "size", "icon", "iconPosition", "disabled", "isLoading", "justIcon", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$justIcon = _ref.justIcon,
    justIcon = _ref$justIcon === void 0 ? false : _ref$justIcon,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return <StyledButton className={cn('flex items-center justify-center', justIcon ? 'h-auto min-w-[auto] p-2' : 'min-w-36 flex-row gap-4', variants[variant], sizes[size], className, disabled && 'opacity-50')} disabled={disabled || isLoading} style={style} onPress={!isLoading ? onPress : undefined} {...restProps}>
      {isLoading && !disabled ? <_reactNative.ActivityIndicator color={PairsColors[variant]} size="small" /> : justIcon && icon ? icon : <>
          {iconPosition === 'left' && icon}
          <_Text.default color={PairsColors[variant]} variant="bold">
            {children}
          </_Text.default>
          {iconPosition === 'right' && icon}
        </>}
    </StyledButton>;
};
var _default = exports["default"] = Button;
//# sourceMappingURL=Button.js.map