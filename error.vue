<template>
    <div class="h-screen flex flex-column align-items-center justify-content-center">
        <div class="font-bold text-8xl text-primary-600">
            {{ error.statusCode }}
        </div>
        <div class="font-bold text-5xl text-primary-400 mb-4">
            <span v-if="error.statusCode === 404">Страница не найдена</span>
            <span v-else-if="error.statusCode === 500">Ошибка сервера</span>
        </div>
        <nuxt-link v-if="error.statusCode === 404" to="/" class="no-underline">
            <Button label="На главную" icon="pi pi-home" />
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button/Button.vue'

defineProps<{ error: any }>()
</script>
