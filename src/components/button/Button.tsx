import { ClassValue, clsx } from 'clsx';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';

import Text from '../text/Text';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'ghostDark';
  size?: 'default' | 'sm' | 'lg';
  textColor?: 'black' | 'white' | 'gray';
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
  textColor,
}) => {
  return (
    <StyledButton
      className={cn(`aling-center  flex justify-center`, variants[variant], sizes[size], className)}
      style={style}
      onPress={onPress}
    >
      <Text
        children="Open App.tsx"
        color={textColor ? textColor : PairsColors[variant]}
        variant="semibold"
      />
    </StyledButton>
  );
};

export default Button;
