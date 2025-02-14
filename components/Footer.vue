<template>
    <footer class="surface-section px-4 md:px-6 lg:px-8">
        <div class="py-6 flex flex-column sm:flex-row align-items-center justify-content-between gap-2">
            <div class="line-height-3">© {{ new Date().getFullYear() }} Kicshikxo, All rights reserved</div>
            <div class="flex gap-3">
                <nuxt-link
                    to="https://pico-td.kicshikxo.ru/"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
                    aria-label="Pico TD game"
                >
                    <Icon name="game-icons:stone-tower" class="text-2xl" />
                </nuxt-link>
                <nuxt-link
                    to="maxwell"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
                    aria-label="Interactive maxwell page"
                >
                    <Icon name="ph:cat-fill" class="text-2xl" />
                </nuxt-link>
                <nuxt-link
                    to="https://github.com/Kicshikxo"
                    target="blank"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
                    aria-label="Github profile"
                >
                    <i class="pi pi-github text-xl" />
                </nuxt-link>
                <nuxt-link
                    to="https://t.me/Kicshikxo"
                    target="blank"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
                    aria-label="Telegram account"
                >
                    <i class="pi pi-telegram text-xl" />
                </nuxt-link>
            </div>
        </div>
    </footer>
</template>
