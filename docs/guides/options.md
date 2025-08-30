# Options

There are [Plugin Options](#plugin-options) and [Swiper Options](#swiper-options).

_Note: String parameters do **not** begin with a `:` but all other types do._

### Plugin Options

You must provide `:slides` or a `base-url` but **not both**.

| Property&nbsp;Name      |  Default&nbsp;Value  |  Type  | Description&nbsp;of&nbsp;Value |
| :---------------------- | :------------------: | :----: | :----------------------------- |
| **:slides**             |   or **base-url**    | Array  | Base URL for image sources     |
| **base-url** **¹**      |    or **:slides**    | String | Base URL for image sources     |
| :number-of-slides **¹** |         `1`          | Number | Number of slides to generate   |
| :start-at **¹**         |         `1`          | Number | Number to start generation     |
| file-ext **¹**          |        `.jpg`        | String | Extension for file names       |
| :pad-start **¹**        |         `1`          | Number | Pad file names with `0`'s      |
| file-name-prefix **¹**  |         ` `          | String | Prefix for file names          |
| alt-text-prefix         |      `Loading`       | String | Prefix for `alt` attributes    |
| button-text             | `View in Fullscreen` | String | Text for fullscreen button     |
| margin-top              |        `10px`        | String | CSS marginTop                  |
| margin-bottom           |        `10px`        | String | CSS marginBottom               |
| height                  |         ` `          | String | CSS height (default: auto)     |

> **¹** Only used with [Dynamic URL's](dynamic.md)

### Swiper Options

Swiper Parameters: https://swiperjs.com/swiper-api#parameters

| Property&nbsp;Name                                                               | Default |  Type   | Description&nbsp;of&nbsp;Value      |
| :------------------------------------------------------------------------------- | :-----: | :-----: | :---------------------------------- |
| [:slides-per-view](https://swiperjs.com/swiper-api#param-slidesPerView)          |   `1`   | Number  | Number of slides shown per view     |
| [:space-between](https://swiperjs.com/swiper-api#param-spaceBetween)             |   `0`   | Number  | Space between slides in pixels      |
| [:lazy-preload-prev-next](https://swiperjs.com/swiper-api#param-spaceBetween)    |   `1`   | Number  | Number of lazy loaded slides        |
| [:breakpoints](https://swiperjs.com/swiper-api#param-breakpoints)                | `null`  | Object  | Breakpoints parameters              |
| [:pagination](https://swiperjs.com/swiper-api#pagination-parameters)             | `true`  | Object  | Pagination parameters               |
| [:keyboard](https://swiperjs.com/swiper-api#param-keyboard)                      | `true`  | Boolean | Enable keyboard navigation          |
| [:mousewheel](https://swiperjs.com/swiper-api#param-mousewheel)                  | `true`  | Boolean | Enable mouse wheel navigation       |
| [:navigation](https://swiperjs.com/swiper-api#param-navigation)                  | `true`  | Boolean | Enable side navigation arrows       |
| [:grab-cursor](https://swiperjs.com/swiper-api#param-grabCursor)                 | `true`  | Boolean | Enable grab cursor on hover         |
| [:loop](https://swiperjs.com/swiper-api#param-loop)                              | `true`  | Boolean | Enable continuous loop              |
| [effect](https://swiperjs.com/swiper-api#param-effect)                           | `slide` | String  | `coverflow`, `cube`, `fade`, `flip` |
| [:coverflow-effect](https://swiperjs.com/swiper-api#coverflow-effect-parameters) |  `{ }`  | Object  | EffectCoverflow parameters          |
| [:cube-effect](https://swiperjs.com/swiper-api#cube-effect-parameters)           |  `{ }`  | Object  | EffectCube parameters               |
| [:fade-effect](https://swiperjs.com/swiper-api#fade-effect-parameters)           |  `{ }`  | Object  | EffectFade parameters               |
| [:flip-effect](https://swiperjs.com/swiper-api#flip-effect-parameters)           |  `{ }`  | Object  | EffectFlip parameters               |

::: tip ❔ ADDITIONAL OPTIONS
If you need more options, please [request a feature](../support.md).
:::
