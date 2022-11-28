<template>
    <section class='grid grid-nogutter surface-section text-800 min-h-screen align-items-center relative'>
        <div class='col-12 md:col-6 px-6 text-center md:text-left '>
            <section>
                <div class="text-6xl py-4 font-bold flex flex-column">
                    <div class='text-6xl font-bold mb-1'>Привет, я <span class="text-primary">Kicshikxo</span></div>
                    <div class='text-5xl font-medium mb-1'>и я — начинающий разработчик</div>
                </div>

                <p class='mt-1 mb-4 text-700 text-2xl'>Этот веб-сайт расскажет обо мне</p>

                <div class="flex flex-column md:flex-row gap-3">
                    <nuxt-link to="https://github.com/Kicshikxo" target="blank" class="no-underline">
                        <p-button label="Github" type='button' class='p-button-raised' icon="pi pi-github" />
                    </nuxt-link>

                    <nuxt-link to="https://t.me/Kicshikxo" target="blank" class="no-underline">
                        <p-button label="Telegram" type='button' class='p-button-outlined' icon="pi pi-telegram" />
                    </nuxt-link>
                </div>
            </section>
        </div>
        <div class='col-12 md:col-6 overflow-hidden'>
            <img width="100%" src='/images/hero.webp' alt='Image'
                style='clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);' />
        </div>
        <div class="absolute bottom-0 left-0 right-0 text-center">
            <div @click="scrolldown" class="scrolldown pi pi-chevron-down mb-3 text-2xl text-800"></div>
        </div>
        <div id="end-hero-section" class="absolute bottom-0"></div>
    </section>
</template>

<script setup>
function scrolldown() {
    document.querySelector('#end-hero-section').scrollIntoView({
        behavior: 'smooth'
    })
}
</script>

<style>
.scrolldown {
    cursor: pointer;
    animation: scrolldownJump 1s infinite ease-out alternate;
}

@keyframes scrolldownJump {
    0% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(-12px);
    }
}
</style>