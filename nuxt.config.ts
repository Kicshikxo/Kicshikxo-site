export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                'lang': 'ru'
            },
            title: 'Kicshikxo\'s site',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preload', href: '/fonts/Rubik-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
            ]
        }
    },

    css: [
        '~/assets/css/main.css',
        '~/assets/css/rubik.fontface.css',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],

    modules: [

    ],

    build: {
        transpile: ['primevue']
    }
})
