export interface BadgeProps {
    color: 'default' | 'secondary' | 'outline' | 'destructive';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    title: string;
}
declare const Badge: ({ color, icon, iconPosition, className, title, }: BadgeProps) => import("react").JSX.Element;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map