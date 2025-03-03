---
sidebar_position: 2
---

# 🚀 Getting Started

Follow these steps to get started with **UI Native** in your React Native project with Expo.

## 1️⃣ Create a New Project with Expo

Before you begin, make sure you have **Node.js** (version 18 or higher) installed. Then, create a new Expo project by running:

```bash
npx create-expo-app my-app
cd my-app
```

This will set up a new Expo project ready to use.

## 2️⃣ Install NativeWind and Tailwind CSS

Follow the installation steps for NativeWind according to its [official documentation](https://www.nativewind.dev/getting-started/installation):

As a quick guide, here are the steps to follow:

```bash
npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```

## 3️⃣ Install UI Native

Install **UI Native** in your project with the following command:

```bash
npm install @carlosmedina06/ui-native
```

## 4️⃣ Configure Tailwind CSS and NativeWind

```bash
npx tailwindcss init
```

This will create a `tailwind.config.js` file in the root of your project. Make sure it has the following configuration, and if not, add it:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add the paths of your React Native files
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
    // Required for UI Native to work with Tailwind CSS for now
    './node_modules/@carlosmedina06/ui-native/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Create a `global.css` file in the root of your project and add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5️⃣ Configure Babel

Open `babel.config.js` and add the NativeWind plugin:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
```

## 6️⃣ Run the Application

Now you can run your application with Expo:

```bash
npx expo start
```

This will open the Expo Developer Tools, allowing you to test your app on a simulator or a real device.

---

Congratulations! 🎉 You now have **UI Native** running in your project. You can start using its components to build amazing interfaces. 🚀
