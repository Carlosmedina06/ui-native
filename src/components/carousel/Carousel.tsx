import { ClassValue, clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import Animated, {
  Extrapolation,
  interpolate,
  scrollTo,
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getWP = (percent: number) => (percent / 100) * Dimensions.get('window').width;

const { width } = Dimensions.get('screen');
const GAP = getWP(12);
const ITEM_WIDTH = width * 0.8;
const TOTAL_WIDTH = ITEM_WIDTH + GAP;

export interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  autoPlay?: boolean;
  variants?: 'default' | 'rounded';
  className?: string;
}

export interface CarouselItemProps<T> {
  index: number;
  scrollX: SharedValue<number>;
  data: T[];
  children: React.ReactNode;
  variants?: 'default' | 'rounded';
  className?: string;
}

const StyledView = cssInterop(View, {
  className: 'style',
});

const Carousel = <T,>({
  data,
  renderItem,
  autoPlay = true,
  variants = 'default',
  className,
}: CarouselProps<T>) => {
  const scrollX = useSharedValue(0);
  const offset = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<T>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
    onMomentumEnd: (event) => {
      offset.value = Math.round(event.contentOffset.x / TOTAL_WIDTH);
    },
  });

  useDerivedValue(() => {
    scrollTo(ref, offset.value * TOTAL_WIDTH, 0, true);
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlay && autoPlay) {
      intervalId = setInterval(() => {
        offset.value = (offset.value + 1) % data.length;
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlay, offset, data, autoPlay]);

  return (
    <View className="align-center ml-[-15px] flex max-h-[150] justify-center">
      <Animated.FlatList
        ref={ref}
        horizontal
        contentContainerStyle={{ gap: GAP }}
        data={data}
        decelerationRate="fast"
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CarouselItem
            className={className}
            data={data}
            index={index}
            scrollX={scrollX}
            variants={variants}
          >
            {renderItem(item, index)}
          </CarouselItem>
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={TOTAL_WIDTH}
        onScroll={onScrollHandler}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        onScrollEndDrag={() => setIsAutoPlay(true)}
      />
    </View>
  );
};

const variantStyles = {
  default: 'flex-1 border border-gray-200',
  rounded: 'rounded-md flex-1 border border-gray-200',
};

const CarouselItem = <T,>({
  index,
  scrollX,
  data,
  children,
  variants = 'default',
  className,
}: CarouselItemProps<T>) => {
  const rnAnimatedStyles = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * TOTAL_WIDTH, index * TOTAL_WIDTH, (index + 1) * TOTAL_WIDTH];

    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            inputRange,
            [-TOTAL_WIDTH * 0.1, 0, TOTAL_WIDTH * 0.1],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const getItemMargin = (index: number, data: T[]) => {
    if (!data?.length) return {};

    if (index === 0) {
      return { marginStart: 15 };
    } else if (index === data?.length - 1) {
      return { marginEnd: 15 };
    }

    return {};
  };

  return (
    <TouchableOpacity>
      <Animated.View
        style={[
          rnAnimatedStyles,
          {
            height: 150,
            maxHeight: 150,
            justifyContent: 'center',
            width: ITEM_WIDTH,
            borderRadius: 10,
            paddingRight: 16,
            flexDirection: 'row',
            alignItems: 'center',
            ...getItemMargin(index, data),
          },
        ]}
      >
        <StyledView className={cn(variantStyles[variants], className)}>{children}</StyledView>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Carousel;
