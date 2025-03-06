import { Ionicons } from '@expo/vector-icons';
import { ClassValue, clsx } from 'clsx';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';

import Text from '../text/Text';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const duration = 300;

export interface AccordionProps {
  viewKey: string;
  title: string;
  children: string;
  textColor?: 'black' | 'white' | 'gray';
  className?: string;
  onPress?: () => void;
}

const StyledAccordion = cssInterop(TouchableOpacity, {
  className: 'style',
});

const StyledAccordionContent = cssInterop(View, {
  className: 'style',
});

const Accordion = ({
  viewKey,
  title,
  children,
  textColor = 'black',
  className,
  onPress = () => {},
}: PropsWithChildren<AccordionProps>) => {
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const height = useSharedValue(0);
  const rotation = useSharedValue(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    const isOpening = rotation.value === 0;

    setIsOpen(isOpening);
    rotation.value = withTiming(isOpening ? 180 : 0, { duration });
    height.value = withTiming(isOpening ? measuredHeight : 0, { duration });
  }, [measuredHeight]);

  useEffect(() => {
    if (isOpen) {
      height.value = withTiming(measuredHeight, { duration });
    }
  }, [measuredHeight]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const bodyStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: 'hidden',
  }));

  return (
    <StyledAccordionContent
      className={cn(
        'min-w-[300px] max-w-[350px] justify-center border-b border-gray-200',
        className,
      )}
    >
      <StyledAccordion
        accessibilityRole="button"
        accessibilityState={{ expanded: rotation.value === 180 }}
        className="flex-row items-center justify-start py-4"
        onPress={toggleAccordion}
      >
        <Text className="text-left" color={textColor} variant="muted">
          {title}
        </Text>
        <Animated.View className="ml-auto" style={[iconStyle]}>
          <Ionicons color={textColor} name="chevron-down" size={20} />
        </Animated.View>
      </StyledAccordion>

      <TouchableOpacity
        className="absolute left-0 right-0 opacity-0"
        onLayout={(e) => setMeasuredHeight(e.nativeEvent.layout.height)}
        onPress={toggleAccordion}
      >
        <Text className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </Text>
      </TouchableOpacity>

      <Animated.View
        key={`accordionItem_${viewKey}`}
        className="self-start"
        style={[bodyStyle]}
        onTouchEnd={() => {
          if (isOpen) {
            toggleAccordion();
            onPress();
          }
        }}
      >
        <Text className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </Text>
      </Animated.View>
    </StyledAccordionContent>
  );
};

export default Accordion;
