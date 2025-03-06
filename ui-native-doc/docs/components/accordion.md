---
sidebar_position: 5
---

# Accordion

The `Accordion` component is an interactive collapsible element for React Native. It allows you to show and hide content smoothly using **react-native-reanimated**.

## 📌 Usage

```tsx
import { Accordion } from '@carlosmedina06/ui-native';

<Accordion viewKey="1" title="Click to expand">
  This is the hidden content that will be revealed when you click.
</Accordion>
```

## 🛠️ Props

| Prop       | Type                                      | Description |
|------------|------------------------------------------|-------------|
| `viewKey`  | `string`                                 | Unique key to identify the accordion instance. |
| `title`    | `string`                                 | The title displayed for the accordion. |
| `children` | `string`                                 | The content to be revealed when expanded. |
| `textColor`| `'black'` \| `'white'` \| `'gray'` _(optional, default: `'black'`)_ | Text color. |
| `className`| `string` _(optional)_                    | Additional Tailwind classes. |
| `onPress`  | `() => void` _(optional)_                | Function executed when the accordion is clicked. |

## 🎥 Animations

The accordion uses **react-native-reanimated** to provide smooth transitions when expanding or collapsing.

## 📝 Full Example

```tsx
<Accordion viewKey="2" title="More details" textColor="gray">
  Here you can place any additional details or information.
</Accordion>
```

This `Accordion` component enhances UX by making content dynamically expandable in **React Native**. 🚀
