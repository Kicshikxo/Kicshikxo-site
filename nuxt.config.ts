export default defineNuxtConfig({
    app: {
        head: {
            title: 'Kicshikxo\'s site',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preload', href: '/fonts/Rubik-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
            ]
        }
    },

    css: [
        'primevue/resources/themes/lara-dark-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        '~/assets/css/rubik.fontface.css',
    ],
    build: {
        transpile: ['primevue']
    }
})
