import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import ScrollTop from 'primevue/scrolltop'
import ProgressSpinner from 'primevue/progressspinner'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: false })
    nuxtApp.vueApp.component('PButton', Button)
    nuxtApp.vueApp.component('PChip', Chip)
    nuxtApp.vueApp.component('PScrollTop', ScrollTop)
    nuxtApp.vueApp.component('PProgressSpinner', ProgressSpinner)
})
