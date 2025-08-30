---
prev:
  text: 'Examples'
  link: '/examples'
---

# Getting Started

A [VitePress](https://vitepress.dev/) Plugin for to Easily add a [Swiper](https://swiperjs.com/) Photo Gallery or Image Slideshow.

Start by [installing](#install) the plugin, getting [setup](#setup) and [using](#usage) the gallery.

## Install

Install directly to your VitePress with the following command.

::: code-group

```shell [npm]
npm i @cssnr/vitepress-swiper
```

```shell [pnpm]
pnpm i @cssnr/vitepress-swiper
```

```shell [yarn]
yarn add @cssnr/vitepress-swiper
```

```shell [bun]
bun i @cssnr/vitepress-swiper
```

:::

_Note: you can also [copy the source](source.md) file to your project._

## Setup

Add these 3 lines to your `index.js` or `index.ts`.

```javascript [.vitepress/theme/index.js]
import DefaultTheme from 'vitepress/theme'

import VPSwiper from '@cssnr/vitepress-swiper' // [!code ++]
import '@cssnr/vitepress-swiper/style.css' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPSwiper', VPSwiper) // [!code ++]
  },
}
```

_Note: if you don't have a [.vitepress/theme/index.js](https://vitepress.dev/guide/custom-theme#theme-resolving) file, create one._

## Usage

Add a `<VPSwiper>` tag where you want the Swiper to show up.

```vue [Markdown ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://example.com/path/1.jpg',
    'https://example.com/path/2.jpg',
    'https://example.com/path/3.jpg',
  ]"
/>
```

Example using [additional options](options.md).

```vue [Markdown ~vscode-icons:file-type-text~]
<VPSwiper
  :slides="[
    'https://example.com/path/1.jpg',
    'https://example.com/path/2.jpg',
    'https://example.com/path/3.jpg',
  ]"
  :pagination="{ type: 'fraction' }"
  :mousewheel="false"
  button-text="Fullscreen"
  margin-top="30px"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
/>
```

_Note: HTML tags must be seperated from Markdown with one blank line._

::: info 🖼️ LIVE DEMOS
You can view more examples on the [Examples page](/examples/index.md).
:::

### Dynamic URLs

This can greatly help reduce boilerplate and footprint when creating Swipers.

This only works if your files are named numerically and ordered sequentially.

See the [Dynamic URL's Page](dynamic.md) for more details and documentation.

::: tip ❔ GET HELP
If you have any trouble getting started, [support is available](../support.md).
:::
