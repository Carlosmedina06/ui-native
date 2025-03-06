import { clsx } from 'clsx';
import { View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';
import Text from '../text/Text';
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return twMerge(clsx(inputs));
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
var StyledBadge = cssInterop(View, {
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
      <Text color={PairsColors[color]} variant="semibold">
        {title}
      </Text>
      {icon && iconPosition === 'right' && icon}
    </StyledBadge>;
};
export default Badge;
//# sourceMappingURL=Badge.js.map