<template>
    <div>
        <Hero />
        <Langs />
        <Repos />
        <Footer />
        <ScrollTop class="bg-primary border-round w-2rem h-2rem text-orange-500" />
    </div>
</template>

<script setup lang="ts">
import { useReposStore } from '@/store/repos'
import ScrollTop from 'primevue/scrolltop/ScrollTop.vue'

useReposStore()
</script>

<style scoped>
:deep(.p-scrolltop) .p-scrolltop-icon {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>
