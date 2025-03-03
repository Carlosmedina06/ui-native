---
sidebar_position: 3
---

# Carousel

The `Carousel` component is an interactive carousel for React Native with support for animated scrolling and autoplay, using **react-native-reanimated** and **NativeWind**.

## 📌 Usage

```tsx
import { Carousel } from '@carlosmedina06/ui-native';
import { View, Text } from 'react-native';

const data = ['Slide 1', 'Slide 2', 'Slide 3'];

const renderItem = (item: string) => (
  <View className="flex h-full w-full items-center justify-center bg-gray-200 rounded-md">
    <Text className="text-lg font-bold">{item}</Text>
  </View>
);

<Carousel data={data} renderItem={renderItem} autoPlay />;
```

## 🛠️ Props

| Prop        | Type                                      | Description |
|-------------|------------------------------------------|-------------|
| `data`      | `T[]`                                    | List of items to be rendered in the carousel |
| `renderItem`| `(item: T, index: number) => JSX.Element`| Function that renders each carousel item |
| `autoPlay`  | `boolean` _(opcional, por defecto `true`)_ | Enables or disables autoplay |
| `variants`  | `'default'` \| `'rounded'` _(opcional)_   | Carousel style (default 'default') |
| `className` | `string` _(opcional)_                    | Additional Tailwind classes |


## 🎥 Animations

The carousel cards include an animation that creates a slight lateral displacement based on the scrollX position.



## 📝 Full Example

```tsx
<Carousel
  data={['One', 'Two', 'Three']}
  className="h-64" // optional
  renderItem={(item) => (
    <View className="h-full w-full items-center justify-center bg-blue-500 rounded-md">
      <Text className="text-white font-bold text-lg">{item}</Text>
    </View>
  )}
  autoPlay
  variants="rounded"
/>
```

The Carousel component allows you to display interactive content with smooth transitions and a flexible design in React Native. 🚀