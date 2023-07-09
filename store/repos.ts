import { defineStore } from 'pinia'

const excludedLangs = ['Pascal', 'CMake']

export const useReposStore = defineStore('repos', () => {
    const { data: repos } = useFetch('/api/repos')
    const { data: langs } = useFetch('/api/langs')

    const publicRepos = computed(() => repos.value?.filter((repo) => repo.visibility === 'public'))
    const langsUsage = computed<[string, number, number][]>(() => {
        const usage = Object.entries(
            langs.value?.reduce((acc, value) => {
                Object.entries(value).forEach(([lang, usage]) => {
                    acc[lang] = (acc[lang] ?? 0) + (usage as number)
                })
                return acc
            }, {} as { [key: string]: number }) ?? {}
        )
            .filter(([lang]) => !excludedLangs.includes(lang))
            .sort(([, usage1], [, usage2]) => usage2 - usage1)

        const totalUsage = usage.reduce((acc, [, usage]) => acc + usage, 0)

        return usage.map(([lang, usage]) => [lang, usage, (usage / totalUsage) * 100])
    })

    return { repos, publicRepos, langs, langsUsage }
})
