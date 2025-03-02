import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const variants = {
  default: 'bg-[#ffffff]',
  destructive: 'bg-[#d72638]',
  outline: 'border border-[#343434] active:bg-[#343434]',
  secondary: 'bg-[#000000] ',
  ghost: 'bg-none active:bg-[#ffffff]',
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
  children,
}) => {
  return (
    <StyledButton
      className={cn(`aling-center  flex justify-center`, variants[variant], sizes[size], className)}
      style={style}
      onPress={onPress}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
