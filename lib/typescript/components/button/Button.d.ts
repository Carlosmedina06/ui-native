import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface ButtonProps {
    title: string;
    onPress: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary';
    size?: 'default' | 'sm' | 'lg';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map