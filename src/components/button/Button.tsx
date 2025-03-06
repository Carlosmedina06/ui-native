import { ClassValue, clsx } from 'clsx';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';

import Text from '../text/Text';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style' | 'children'> {
  className?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'ghostDark';
  size?: 'default' | 'sm' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  isLoading?: boolean;
  justIcon?: boolean;
  children?: React.ReactNode;
}

const variants = {
  default: 'bg-[#ffffff] active:bg-[#000000]',
  destructive: 'bg-[#d72638]',
  outline: 'border border-[#343434] active:bg-[#343434]',
  secondary: 'bg-[#000000] active:bg-[#ffffff]',
  ghost: 'bg-none',
  ghostDark: 'bg-none',
};

const PairsColors: Record<string, 'black' | 'white' | 'gray'> = {
  default: 'black',
  destructive: 'white',
  outline: 'gray',
  secondary: 'white',
  ghost: 'black',
  ghostDark: 'white',
};

const sizes = {
  default: 'h-12 px-5 py-3 rounded-md',
  sm: 'h-8 px-3 py-3 rounded-md',
  lg: 'h-16 px-6 py-4 rounded-lg',
};

const StyledButton = cssInterop(TouchableOpacity, {
  className: 'style',
});

const Button: React.FC<ButtonProps> = ({
  onPress,
  className,
  style,
  variant = 'default',
  size = 'default',
  icon = null,
  iconPosition = 'left',
  disabled = false,
  isLoading = false,
  justIcon = false,
  children,
  ...restProps
}) => {
  return (
    <StyledButton
      className={cn(
        'flex items-center justify-center',
        justIcon ? 'h-auto min-w-[auto] p-2' : 'min-w-36 flex-row gap-4',
        variants[variant],
        sizes[size],
        className,
        disabled && 'opacity-50',
      )}
      disabled={disabled || isLoading}
      style={style}
      onPress={!isLoading ? onPress : undefined}
      {...restProps}
    >
      {isLoading && !disabled ? (
        <ActivityIndicator color={PairsColors[variant]} size="small" />
      ) : justIcon && icon ? (
        icon
      ) : (
        <>
          {iconPosition === 'left' && icon}
          <Text color={PairsColors[variant]} variant="bold">
            {children}
          </Text>
          {iconPosition === 'right' && icon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
