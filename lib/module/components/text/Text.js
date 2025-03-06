var _excluded = ["children", "className", "style", "variant", "color"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { clsx } from 'clsx';
import { Text as BaseText } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return twMerge(clsx(inputs));
}
var variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  p: 'text-base',
  inline: 'font-mono bg-gray-200 px-1 rounded text-black',
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
var StyledText = cssInterop(BaseText, {
  className: 'style'
});
var Text = function Text(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return <StyledText {...restProps} className={cn(variants[variant], colors[color], className)} style={style}>
      {children}
    </StyledText>;
};
export default Text;
//# sourceMappingURL=Text.js.map