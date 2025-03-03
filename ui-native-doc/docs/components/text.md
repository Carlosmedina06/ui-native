---
sidebar_position: 2
---

# Text Component

The `Text` component is a reusable component for handling different text styles in React Native with NativeWind. It allows defining size, weight, and color variants.

## 📌 Usage

```tsx
import { Text } from '@carlosmedina06/ui-native';

<Text variant="h1" color="black">
  Main Title
</Text>
```

## 🛠️ Props

| Prop       | Type                                                                 | Description |
|------------|----------------------------------------------------------------------|-------------|
| `children` | `React.ReactNode`                                                   | Content inside the text component. |
| `className`| `string`                                                             | Additional Tailwind classes |
| `style`    | `StyleProp<TextStyle>`                                              | Custom styles from React Native |
| `variant`  | `'h1'` \| `'h2'` \| `'h3'` \| `'h4'` \| `'p'` \| `'inline'` \| `'lead'` \| `'large'` \| `'small'` \| `'muted'` \| `'default'` \| `'bold'` \| `'semibold'` | Text style variant |
| `color`    | `'black'` \| `'white'` \| `'gray'`                                  | Text color |


## 📝  Full Example

```tsx
<Text variant="lead" color="gray">
  This is a highlighted text in gray color.
</Text>
```

The Text component allows you to create flexible and reusable styles in React Native with Tailwind CSS. 🚀