# 🔨 flatten-tailwindcss-theme

[![npm version][npm badge]][npm url]
[![GitHub license][license badge]][license url]

Flatten TailwindCSS theme objects for plugins to conveniently generate utilities and components.

## Requirements

- Node.js 12+

- Tailwind CSS 2+

## Install

```bash
yarn add flatten-tailwindcss-theme
```

Or if you use `npm`:

```bash
npm i --save flatten-tailwindcss-theme
```

## Usage

### In a TailwindCSS plugin

```js
const plugin = require("tailwindcss/plugin");
const flatten = require("flatten-tailwindcss-theme");

module.exports = plugin(({ addUtilities, variants, theme, e }) => {
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
```

> The above plugin add classes: `textfill-white`, `textfill-gray-100`, `textfill-gray-200`, ... , `textfill-blue-100`, `textfill-blue-200`, ... , etc.

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
// Output:
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

## Contributing

### Requirements

- Node 12+

- Yarn 1.22+

### Setup

1. Install requirements

2. Clone the repository

3. Run `yarn` to install dependencies

### Develop

- Commit adhering to [Angular commit convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), use `yarn commit` or [Code conventional commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to commit interactively

- Submit a PR and make sure required status checks pass

- When a PR is merged or code is pushed to `master`, Github automatically builds and publishes a new release if there're relevant changes

---

Made by [@phuctm97].

<!-- Badges -->

[npm badge]: https://img.shields.io/npm/v/flatten-tailwindcss-theme?logo=npm
[license badge]: https://img.shields.io/github/license/phuctm97/flatten-tailwindcss-theme
[npm url]: https://www.npmjs.com/package/flatten-tailwindcss-theme
[license url]: /LICENSE

<!-- Links -->

[@phuctm97]: https://phuctm97.com
