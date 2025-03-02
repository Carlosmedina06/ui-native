import { StyleProp, TextStyle } from 'react-native';
interface TextProps {
    children: React.ReactNode;
    className?: string;
    style?: StyleProp<TextStyle>;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'inline' | 'lead' | 'large' | 'small' | 'muted' | 'default' | 'bold' | 'semibold';
    color?: 'black' | 'white' | 'gray';
}
declare const Text: React.FC<TextProps>;
export default Text;
//# sourceMappingURL=Text.d.ts.map