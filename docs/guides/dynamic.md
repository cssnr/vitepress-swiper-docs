# Dynamic URL Generation

This can greatly help reduce boilerplate and footprint when creating Swipers.

::: tip
This only works if your files are named numerically and ordered sequentially.
:::

This generates numbers for filenames and appends them to the base url as follows:

- `base-url` + `/` + `file-name-prefix` + `file#` + `file-ext`

Therefore, the following `<VPSwiper>` tag options/parameters.

```vue [Markdown ~vscode-icons:file-type-text~]
<VPSwiper base-url="https://example.com/path" :number-of-slides="3" />
```

Will produce these URL's:

```text
https://example.com/path/1.jpg
https://example.com/path/2.jpg
https://example.com/path/3.jpg
```

Example using [additional options](options.md).

```vue [Markdown ~vscode-icons:file-type-text~]
<VPSwiper
  base-url="https://example.com/path"
  :number-of-slides="4"
  :start-at="8"
  :pad-start="2"
  file-name-prefix="slide-"
  file-ext=".png"
  :pagination="{ clickable: true }"
  :grab-cursor="false"
  margin-top="40px"
  effect="fade"
/>
```

Resulting URL's:

```text
https://example.com/path/slide-08.png
https://example.com/path/slide-09.png
https://example.com/path/slide-10.png
https://example.com/path/slide-11.png
```

::: info 🖼️ LIVE DEMOS
You can view more examples on the [Examples page](../examples).
:::

Make sure to review all the [additional options](options.md) for the `<VPSwiper>` tag.
