import { ClassValue, clsx } from 'clsx';
import { Text as BaseText, StyleProp, TextStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextProps extends React.ComponentProps<typeof BaseText> {
  children: React.ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'inline'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted'
    | 'default'
    | 'bold'
    | 'semibold';
  color?: 'black' | 'white' | 'gray';
}

const variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  p: 'text-base',
  inline: 'font-mono bg-gray-200 px-1 rounded text-black',
  lead: 'text-lg text-gray-700',
  large: 'text-lg font-semibold',
  small: 'text-sm',
  muted: 'text-gray-500',
  default: 'text-black',
  bold: 'font-bold',
  semibold: 'font-semibold',
};

const colors = {
  black: 'text-black',
  white: 'text-white',
  gray: 'text-gray-500',
};

const StyledText = cssInterop(BaseText, {
  className: 'style',
});

const Text: React.FC<TextProps> = ({
  children,
  className,
  style,
  variant = 'default',
  color = 'black',
  ...restProps
}) => {
  return (
    <StyledText
      {...restProps}
      className={cn(variants[variant], colors[color], className)}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Text;
