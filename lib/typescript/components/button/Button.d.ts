import { StyleProp, ViewStyle } from 'react-native';
interface ButtonProps {
    children?: React.ReactNode;
    onPress: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map