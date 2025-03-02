import { Text as BaseText } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import cn from 'src/utils/cn';
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
    color = _ref$color === void 0 ? 'black' : _ref$color;
  return <StyledText className={cn(variants[variant], colors[color], className)} style={style}>
      {children}
    </StyledText>;
};
export default Text;
//# sourceMappingURL=Text.js.map