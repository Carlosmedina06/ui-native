---
sidebar_position: 4
---

# Badge

The `Badge` component is a reusable UI element for displaying small pieces of information, such as labels or indicators, in **React Native** with **NativeWind**.

## 📌 Usage

```tsx
import { Badge } from '@carlosmedina06/ui-native';

<Badge title="New" color="default" />;
```

## 🛠️ Props

| Prop          | Type                                          | Description |
|--------------|-----------------------------------------------|-------------|
| `title`      | `string`                                      | Text inside the badge. |
| `color`      | `'default'` \| `'secondary'` \| `'outline'` \| `'destructive'` | Badge color variant. |
| `icon`       | `React.ReactNode` _(optional)_                | Optional icon inside the badge. |
| `iconPosition` | `'left'` \| `'right'` _(optional, default `'left'`)_ | Icon position relative to the text. |
| `className`  | `string` _(optional)_                         | Additional Tailwind classes. |

## 📝 Full Example

```tsx
<Badge title="Warning" color="destructive" icon={<WarningIcon />} iconPosition="left" />
```

The `Badge` component provides a flexible way to highlight important information in **React Native**. 🚀
