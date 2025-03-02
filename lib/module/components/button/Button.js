import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import cn from '../../utils/cn';
var StyledButton = cssInterop(TouchableOpacity, {
  className: 'style'
});
var Button = function Button(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    className = _ref.className,
    style = _ref.style;
  return <StyledButton className={cn('rounded-md bg-blue-500  px-5 py-3  text-white ', className)} style={style} onPress={onPress}>
      <Text>{title}</Text>
    </StyledButton>;
};
export default Button;
//# sourceMappingURL=Button.js.map