---
next:
  text: 'Usage'
  link: '/guides/get-started#usage'
---

# Use from Source

You can easily add the source file to your project for full control over the template.

::: warning
This method is for advanced users and does not provide updates or support.
:::

Download or copy the [VPSwiper.vue](https://github.com/cssnr/vitepress-swiper/blob/master/src/VPSwiper.vue)
file to your project.

- Source File: [VPSwiper.vue](https://github.com/cssnr/vitepress-swiper/blob/master/src/VPSwiper.vue)
- Target Location: `.vitepress/theme/components/VPSwiper.vue`

Install the dependency, Swiper.

::: code-group

```shell [npm]
npm i swiper
```

```shell [pnpm]
pnpm i swiper
```

```shell [yarn]
yarn add swiper
```

```shell [bun]
bun i swiper
```

:::

Add these 2 lines to your `index.js` or `index.ts`.

```javascript [.vitepress/theme/index.js]
import DefaultTheme from 'vitepress/theme'

import VPSwiper from './components/VPSwiper.vue' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPSwiper', VPSwiper) // [!code ++]
  },
}
```

Then see the [Usage Guide](get-started.md#usage) for instructions on adding the `<VPSwiper>` tag.
