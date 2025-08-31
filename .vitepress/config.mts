import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const settings = {
  title: 'VitePress Swiper',
  name: 'Swiper Plugin for VitePress',
  description: {
    short: 'VitePress Plugin for a SwiperJS Gallery.',
    long: 'A VitePress Plugin to Easily add a SwiperJS Photo Gallery or Image Slideshow with Custom Options.',
  },
  image: '/images/logo.png',
  color: '#0064FC',
  docs_repo: 'https://github.com/cssnr/vitepress-swiper-docs',
  source_repo: 'https://github.com/cssnr/vitepress-swiper',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  // base: '/path/',
  vite: {
    server: {
      allowedHosts: true,
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          git: 'vscode-icons:file-type-git',
        },
      }),
    ],
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: settings.image }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: settings.color }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guides/get-started', activeMatch: '/guides/' },
      { text: 'Examples', link: '/examples', activeMatch: '/examples/' },
      {
        text: 'Links',
        items: [
          { text: 'Source Code on GitHub', link: settings.source_repo },
          { text: 'Package on NPM', link: 'https://www.npmjs.com/package/@cssnr/vitepress-swiper' },
          { text: 'Developer Site', link: 'https://cssnr.github.io/' },
          { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Get Started', link: '/guides/get-started' },
          { text: 'Plugin Options', link: '/guides/options' },
          { text: "Dynamic URL's", link: '/guides/dynamic' },
          { text: 'Use from Source', link: '/guides/source' },
        ],
      },
      {
        text: 'Examples',
        link: '/examples',
        collapsed: false,
        items: [
          { text: 'Basic', link: '/examples/basic' },
          { text: 'Slide', link: '/examples/slide' },
          { text: 'Cube', link: '/examples/cube' },
          { text: 'Coverflow', link: '/examples/coverflow' },
          { text: 'Fade', link: '/examples/fade' },
          { text: 'Flip', link: '/examples/flip' },
          { text: 'Vertical', link: '/examples/vertical' },
        ],
      },
      {
        text: 'Support',
        items: [{ text: 'Support', link: '/support' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: settings.source_repo },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@cssnr/vitepress-swiper' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    editLink: {
      pattern: `${settings.docs_repo}/blob/master/docs/:path`,
      text: 'View on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'C5CAXNAV8S',
      //   apiKey: '2485bd6cfe2823fac3a521edb6a3652f',
      //   indexName: 'vitepress-swiper-docs',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
