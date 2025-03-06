import { PropsWithChildren } from 'react';
export interface AccordionProps {
    viewKey: string;
    title: string;
    children: string;
    textColor?: 'black' | 'white' | 'gray';
    className?: string;
    onPress?: () => void;
}
declare const Accordion: ({ viewKey, title, children, textColor, className, onPress, }: PropsWithChildren<AccordionProps>) => import("react").JSX.Element;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map