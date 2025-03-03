---
sidebar_position: 1
---

# Button

The `Button` component is a reusable button designed for React Native with NativeWind. It supports different variants, sizes, and text colors.

## 📌 Usage

```tsx
import { Button }  from '@carlosmedina06/ui-native';

<Button onPress={() => console.log('Pressed')} variant="default" size="lg">
  Press
</Button>
```

## 🛠️ Props

| Prop       | Type                                                                 | Description |
|------------|----------------------------------------------------------------------|-------------|
| `children` | `React.ReactNode`                                                   | Content inside the button. |
| `onPress`  | `() => void`                                                         | Function executed when pressed. |
| `className`| `string`                                                             | Additional Tailwind classes. |
| `style`    | `StyleProp<ViewStyle>`                                               | Custom React Native styles. |
| `variant`  | `'default'` \| `'destructive'` \| `'outline'` \| `'secondary'` \| `'ghost'` \| `'ghostDark'` | Button color variants. |
| `size`     | `'default'` \| `'sm'` \| `'lg'`                                     | Button size. |
| `textColor`| `'black'` \| `'white'` \| `'gray'`                                  | Text color (optional). |

## 📝 Full Example

```tsx
<Button onPress={() => console.log('Pressed')} variant="secondary" size="sm">
  Click me!
</Button>
```

This button renders with default styles and uses the `Text` component to display its content.

---

With this flexible button, you can build modern and dynamic interfaces in **React Native** 🚀.
