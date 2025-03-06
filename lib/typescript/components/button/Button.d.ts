import { TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map