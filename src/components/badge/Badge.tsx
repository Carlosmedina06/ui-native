import { ClassValue, clsx } from 'clsx';
import { View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { twMerge } from 'tailwind-merge';

import Text from '../text/Text';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps {
  color: 'default' | 'secondary' | 'outline' | 'destructive';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  title: string;
}

const variants: Record<BadgeProps['color'], string> = {
  default: 'bg-[#ffffff] active:bg-[#000000]',
  destructive: 'bg-[#d72638]',
  outline: 'border border-gray-800',
  secondary: ' bg-slate-800 active:bg-[#ffffff]',
};

const PairsColors: Record<string, 'black' | 'white' | 'gray'> = {
  default: 'black',
  destructive: 'white',
  outline: 'white',
  secondary: 'white',
};

const StyledBadge = cssInterop(View, {
  className: 'style',
});

const Badge = ({
  color = 'default',
  icon,
  iconPosition = 'left',
  className,
  title,
}: BadgeProps) => {
  return (
    <StyledBadge
      className={cn(
        'pointer-events-none flex items-center justify-center rounded-md bg-slate-700 px-3 py-1',
        variants[color],
        icon && 'flex-row gap-2',
        className,
      )}
    >
      {icon && iconPosition === 'left' && icon}
      <Text color={PairsColors[color]} variant="semibold">
        {title}
      </Text>
      {icon && iconPosition === 'right' && icon}
    </StyledBadge>
  );
};

export default Badge;
