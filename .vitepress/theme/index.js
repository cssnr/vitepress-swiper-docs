import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'
import 'virtual:group-icons.css'

import ExampleLinks from './components/ExampleLinks.vue'

import CopyButton from '@cssnr/vitepress-plugin-copybutton'
import '@cssnr/vitepress-plugin-copybutton/style.css'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('ExampleLinks', ExampleLinks)

        app.component('CB', CopyButton)
        app.component('VPSwiper', VPSwiper)
    },
}
