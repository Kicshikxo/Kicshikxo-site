<template>
    <section class="surface-section px-4 pt-6 md:px-6 lg:px-8 text-center">
        <div class="mb-6 font-bold text-900 text-2xl">Мои репозитории Github</div>
        <div class="grid">
            <div v-for="repo in repos" :key="repo.id" class="col-12 md:col-4 xl:col-3 p-2 text-left">
                <div class="shadow-1 p-3 border-1 border-round surface-border min-h-full flex flex-column">
                    <div class="flex align-items-center">
                        <nuxt-link
                            :to="repo.html_url"
                            target="_blank"
                            class="text-primary font-bold mr-2 no-underline hover:underline"
                        >
                            {{ repo.name }}
                        </nuxt-link>
                        <p-chip class="text-xs surface-ground surface-border border-1 py-1 px-2 align-self-start">
                            {{ repo.private ? 'Private' : 'Public' }}
                        </p-chip>
                    </div>
                    <div class="text-700 text-sm my-2 flex-grow-1">
                        {{ repo.description }}
                    </div>
                    <div class="flex align-items-center text-700 text-xs">
                        <div class="mr-4">{{ repo.language }}</div>
                        <div v-if="repo.stargazers_count" class="flex align-items-center">
                            <div class="pi pi-star"></div>
                            <div class="ml-1">{{ repo.stargazers_count }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { data: repos } = await useFetch('https://api.github.com/users/Kicshikxo/repos?sort=pushed')
</script>
