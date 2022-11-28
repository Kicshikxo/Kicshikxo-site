<template>
    <footer class="surface-section px-4 md:px-6 lg:px-8">
        <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
            <div>
                <div class="mt-2 line-height-3">© {{ new Date().getFullYear() }} Kicshikxo, All rights reserved</div>
            </div>
            <div class="mt-3 sm:mt-0">
                <nuxt-link to="https://github.com/Kicshikxo" target="blank"
                    class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                    <i class="pi pi-github text-xl" />
                </nuxt-link>
                <nuxt-link to="https://t.me/Kicshikxo" target="blank"
                    class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                    <i class="pi pi-telegram text-xl" />
                </nuxt-link>
            </div>
        </div>
    </footer>
</template>