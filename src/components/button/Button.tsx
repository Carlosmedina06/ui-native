import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';

import cn from '../../utils/cn';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
}

const variants = {
  default: 'bg-[#343434] text-white shadow-xs',
  destructive: 'bg-[#d72638] text-white shadow-xs',
  outline: 'border border-input bg-[#ffffff] text-[#343434]',
  secondary: 'bg-[#ffffff] text-[#343434]',
};

const sizes = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md gap-1.5 px-3',
  lg: 'h-10 rounded-md px-6',
};

const StyledButton = cssInterop(TouchableOpacity, {
  className: 'style',
});

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  className,
  style,
  variant = 'default',
  size = 'default',
}) => {
  return (
    <StyledButton
      className={cn('', variants[variant], sizes[size], className)}
      style={style}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </StyledButton>
  );
};

export default Button;
