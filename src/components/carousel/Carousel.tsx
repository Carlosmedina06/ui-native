import { Dimensions, TouchableOpacity, View } from 'react-native';
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
import { useEffect, useState } from 'react';

import Text from '../text/Text';

const getWP = (percent: number) => {
  return (percent / 100) * Dimensions.get('window').width;
};

interface CardData {
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
}

interface CarruselItemProps {
  item: CardData;
  index: number;
  scrollX: SharedValue<number>;
}

const { width } = Dimensions.get('screen');
const GAP = getWP(12);
const ITEM_WIDTH = width * 0.8;
const TOTAL_WIDTH = ITEM_WIDTH + GAP;

const cards: CardData[] = [
  {
    title: 'Preguntas frecuentes',
    description: 'Aprendé cómo cargar una receta',
    backgroundColor: '#FFFAEB',
    borderColor: '#FEF0C7',
  },
  {
    title: 'Nuevo',
    description: 'Consultá recetas disponibles con la credencial',
    backgroundColor: '#d1fadf',
    borderColor: '#d1fadf',
  },
];

const PromoCarousel = () => {
  const scrollX = useSharedValue(0);
  const offset = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>(); // eslint-disable-line @typescript-eslint/no-explicit-any
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

    if (isAutoPlay) {
      intervalId = setInterval(() => {
        offset.value = (offset.value + 1) % cards.length;
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlay, offset]);

  return (
    <View className="align-center ml-[-15px] flex justify-center">
      <Animated.FlatList
        ref={ref}
        horizontal
        contentContainerStyle={{ gap: GAP }}
        data={cards}
        decelerationRate="fast"
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <CarruselItem index={index} item={item} scrollX={scrollX} />
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

const CarruselItem = ({ item, index, scrollX }: CarruselItemProps) => {
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

  // Condicional para el margen en el primer y último ítem
  const getItemMargin = (index: number) => {
    if (index === 0) {
      return { marginStart: 15 }; // Primer ítem
    } else if (index === cards.length - 1) {
      return { marginEnd: 15 }; // Último ítem
    }

    return {}; // Para otros ítems, sin márgenes
  };

  return (
    <TouchableOpacity>
      <Animated.View
        style={[
          rnAnimatedStyles,
          {
            height: 150,
            backgroundColor: item.backgroundColor,
            borderColor: item.borderColor,
            justifyContent: 'center',
            width: ITEM_WIDTH,
            borderRadius: 10,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            ...getItemMargin(index),
          },
        ]}
      >
        <View className="flex-1 pr-[15px]">
          <Text variant="semibold">{item.title}</Text>\{' '}
          <Text variant="semibold">{item.description}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default PromoCarousel;
