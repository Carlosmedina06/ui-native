import { StyleProp, ViewStyle } from 'react-native';
interface ButtonProps {
    title: string;
    onPress: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
}
declare const StyledButton: import("react").ComponentType<ButtonProps & {
    readonly className?: string | undefined;
}>;
export default StyledButton;
