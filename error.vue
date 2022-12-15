<template>
    <div>
        <div class="h-screen flex flex-column align-items-center justify-content-center">
            <div class="text-primary font-bold text-8xl">
                {{ error.statusCode }}
            </div>
            <div class="mt-6 font-bold text-6xl text-900">
                <span v-if="error.statusCode === '404'">Страница не найдена</span>
                <span v-else-if="(error.statusCode === '500')">Ошибка сервера</span>
            </div>
            <div class="text-700 text-3xl my-6">
                <span v-if="error.statusCode === '404'">Извините, но данная страница не существует</span>
                <span v-else-if="(error.statusCode === '500')">Во время загрузки страницы произошла ошибка</span>
            </div>
            <nuxt-link v-if="error.statusCode === '404'" to="/" class="no-underline">
                <p-button label="На главную" icon="pi pi-home" aria-label="На главную" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>
