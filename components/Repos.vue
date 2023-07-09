<template>
    <section class="surface-section px-4 pt-6 md:px-6 lg:px-8 text-center">
        <div class="mb-6 font-bold text-900 text-2xl">
            Мои
            <nuxt-link
                class="text-primary no-underline hover:underline"
                to="https://github.com/Kicshikxo?tab=repositories"
                target="_blank"
            >
                репозитории
            </nuxt-link>
            Github
        </div>
        <div class="grid">
            <div v-for="repo in reposStore.publicRepos" :key="repo.id" class="col-12 md:col-4 xl:col-3 p-2 text-left">
                <div class="shadow-1 p-3 border-1 border-round surface-border min-h-full flex flex-column">
                    <div class="flex align-items-center gap-2">
                        <nuxt-link
                            :to="repo.html_url"
                            target="_blank"
                            class="text-primary font-bold no-underline hover:underline"
                        >
                            {{ repo.name }}
                        </nuxt-link>
                        <Chip class="text-xs surface-ground surface-border border-1 py-1 px-2 align-self-start">
                            {{ repo.private ? 'Private' : 'Public' }}
                        </Chip>
                    </div>
                    <div class="text-700 text-sm my-2 flex-grow-1">
                        {{ repo.description }}
                    </div>
                    <div class="flex align-items-center gap-4 text-700 text-xs">
                        <div v-if="repo.language">{{ repo.language }}</div>
                        <div v-if="repo.stargazers_count" class="flex align-items-center gap-1">
                            <div class="pi pi-star"></div>
                            <div>{{ repo.stargazers_count }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Chip from 'primevue/chip/Chip.vue'
import { useReposStore } from '~~/store/repos'

const reposStore = useReposStore()
</script>
