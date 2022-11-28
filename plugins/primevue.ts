import { defineNuxtPlugin } from "#app"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Chip from 'primevue/chip'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: false })
    nuxtApp.vueApp.component('PButton', Button)
    nuxtApp.vueApp.component('PChip', Chip)
})