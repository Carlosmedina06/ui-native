import { StyleProp, ViewStyle } from 'react-native';
interface ButtonProps {
    children?: React.ReactNode;
    onPress: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'ghostDark';
    size?: 'default' | 'sm' | 'lg';
    textColor?: 'black' | 'white' | 'gray';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map