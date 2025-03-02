import { TouchableOpacity } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import cn from '../../utils/cn';
var variants = {
  "default": 'bg-[#ffffff]',
  destructive: 'bg-[#d72638]',
  outline: 'border border-[#343434] active:bg-[#343434]',
  secondary: 'bg-[#ffffff] text-[#343434]',
  ghost: 'bg-none active:bg-[#ffffff]'
};
var sizes = {
  "default": 'h-12 px-5 py-3 rounded-md',
  sm: 'h-8 px-3 py-3 rounded-md',
  lg: 'h-16 px-6 py-4 rounded-lg'
};
var StyledButton = cssInterop(TouchableOpacity, {
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
    children = _ref.children;
  return <StyledButton className={cn("aling-center  flex justify-center", variants[variant], sizes[size], className)} style={style} onPress={onPress}>
      {children}
    </StyledButton>;
};
export default Button;
//# sourceMappingURL=Button.js.map