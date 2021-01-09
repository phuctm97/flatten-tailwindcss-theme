# 🔨 flatten-tailwindcss-theme

Flatten TailwindCSS theme objects for plugins to conveniently generate utilities and components.

## Install

```bash
yarn add -D flatten-tailwindcss-theme
```

Or if you use `npm`:

```bash
npm i --save-dev flatten-tailwindcss-theme
```

## Usage

### In a TailwindCSS plugin

```js
const plugin = require("tailwindcss/plugin");
const flatten = require("flatten-tailwindcss-theme");

const textfill = plugin(({ addUtilities, variants, theme, e }) => {
  const colors = flatten(theme("colors"));
  const utils = Object.entries(colors).reduce(
    (res, [key, value]) =>
      Object.assign(res, {
        [`.${e(`textfill-${key}`)}`]: {
          "-webkit-text-fill-color": value,
        },
      }),
    {}
  );
  addUtilities(utils, variants("textfill"));
});
module.exports = textfill;
```

> The above plugin will add classes: `textfill-white`, `textfill-gray-100`, `textfill-gray-200`, etc.

### In a generic Node.js task

```js
const flatten = require("flatten-tailwindcss-theme");

const output = flatten({
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
  red: {
    100: "#fff5f5",
    200: "#fed7d7",
    300: "#feb2b2",
    400: "#fc8181",
    500: "#f56565",
    600: "#e53e3e",
    700: "#c53030",
    800: "#9b2c2c",
    900: "#742a2a",
  },
});
console.log(output);
```

```
{
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  'gray-100': '#f7fafc',
  'gray-200': '#edf2f7',
  'gray-300': '#e2e8f0',
  'gray-400': '#cbd5e0',
  'gray-500': '#a0aec0',
  'gray-600': '#718096',
  'gray-700': '#4a5568',
  'gray-800': '#2d3748',
  'gray-900': '#1a202c',
  'red-100': '#fff5f5',
  'red-200': '#fed7d7',
  'red-300': '#feb2b2',
  'red-400': '#fc8181',
  'red-500': '#f56565',
  'red-600': '#e53e3e',
  'red-700': '#c53030',
  'red-800': '#9b2c2c',
  'red-900': '#742a2a'
}
```

## Requirements

- Node.js 12+

- TailwindCSS 2
