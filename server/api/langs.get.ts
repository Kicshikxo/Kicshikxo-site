export default defineEventHandler(async (event) => {
    const repos = await $fetch('/api/repos')

    return await Promise.all(
        repos.map(
            async (repo) =>
                await $fetch(`https://api.github.com/repos/${repo.full_name}/languages`, {
                    headers: {
                        Authorization: `token ${process.env.GITHUB_API_TOKEN}`
                    }
                })
        )
    )
})
