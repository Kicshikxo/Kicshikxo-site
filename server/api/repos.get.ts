export default defineEventHandler(async (event) => {
    return await $fetch<any[]>(`https://api.github.com/user/repos?sort=pushed`, {
        headers: {
            Authorization: `token ${process.env.GITHUB_API_TOKEN}`
        }
    })
})
