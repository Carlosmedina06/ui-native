interface CarouselProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => JSX.Element;
    autoPlay?: boolean;
    variants?: 'default' | 'rounded';
    className?: string;
}
declare const Carousel: <T>({ data, renderItem, autoPlay, variants, className, }: CarouselProps<T>) => import("react").JSX.Element;
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map