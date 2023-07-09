<template>
    <div class="surface-section px-4 pt-6 md:px-6 lg:px-8 text-center">
        <div class="mb-3 font-bold text-2xl">
            <span class="text-800">Языки </span>
            <span class="text-primary">программирования</span>
            <span class="text-800">, которые я использую</span>
        </div>
        <div class="flex flex-wrap justify-content-evenly align-items-center">
            <div v-for="[lang, usage, percent] in reposStore.langsUsage.slice(0, 8)" class="py-5">
                <span class="p-3 shadow-2 mb-3 border-round inline-block surface-card">
                    <Icon :name="langsLogos[lang] ?? `devicon:${lang.toLowerCase()}`" class="text-2xl" />
                </span>
                <div class="text-800 mb-3 font-medium">{{ lang }}</div>
                <div class="text-700 text-sm font-medium line-height-2">{{ Math.round(percent) }}%</div>
                <ProgressBar
                    :value="percent"
                    :showValue="false"
                    class="w-6rem"
                    style="height: 4px"
                    :area-label="`${lang} progress bar`"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProgressBar from 'primevue/progressbar/ProgressBar.vue'
import { useReposStore } from '~~/store/repos'

const reposStore = useReposStore()

const langsLogos: { [key: string]: string } = {
    JavaScript: 'devicon:javascript',
    TypeScript: 'devicon:typescript',
    Vue: 'logos:vue',
    Dart: 'devicon:dart',
    HTML: 'devicon:html5',
    CSS: 'devicon:css3',
    'C++': 'devicon:cplusplus',
    'C#': 'devicon:csharp'
}
</script>
