import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';

import cn from '../../utils/cn';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'link';
  size?: 'default' | 'sm' | 'lg';
}

const variants = {
  default: 'bg-primary text-primary-foreground shadow-xs',
  destructive: 'bg-destructive text-white shadow-xs',
  outline: 'border border-input bg-background shadow-xs',
  secondary: 'bg-secondary text-secondary-foreground shadow-xs',
  link: 'text-primary underline-offset-4',
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
