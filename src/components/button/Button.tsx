import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';

import cn from '../../utils/cn';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const StyledButton = cssInterop(TouchableOpacity, {
  className: 'style',
});

const Button: React.FC<ButtonProps> = ({ title, onPress, className, style }) => {
  return (
    <StyledButton
      className={cn('rounded-md bg-blue-500  px-5 py-3  text-white ', className)}
      style={style}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </StyledButton>
  );
};

export default Button;
