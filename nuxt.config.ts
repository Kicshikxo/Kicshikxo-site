export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            title: "Kicshikxo's site",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "Kicshikxo's portfolio website"
                }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'preload',
                    href: '/fonts/Rubik-Regular.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: ''
                }
            ]
        }
    },

    css: [
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',

        '~/assets/css/rubik.fontface.css',
        '~/assets/css/theme.css',
        '~/assets/css/main.css'
    ],

    modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@nuxt/image-edge', '@nuxt/devtools', '@nuxtjs/robots', 'nuxt-icon'],

    build: {
        transpile: ['primevue', 'three']
    }
})
