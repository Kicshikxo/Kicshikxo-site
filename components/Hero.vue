<template>
    <section class='grid grid-nogutter surface-section text-800 min-h-screen align-items-center relative'>
        <div class='col-12 md:col-6 px-6 pt-6 md:pt-0 text-center md:text-left '>
            <section>
                <div class="text-6xl font-bold flex flex-column">
                    <div class='text-6xl font-bold mb-1'>
                        Привет, я <span class="text-primary">Kicshikxo</span>
                        <nuxt-img class="hello-emoji mx-3" width="50" height="50" src="/images/hello-emoji.webp"
                            alt="hello emoji" />
                    </div>
                    <div class='text-5xl font-medium mb-1'>и я — начинающий разработчик</div>
                </div>

                <p class='mt-1 mb-4 text-700 text-2xl'>Этот веб-сайт расскажет обо мне</p>

                <div class="flex flex-column md:flex-row gap-3">
                    <nuxt-link to="https://github.com/Kicshikxo" target="blank" class="no-underline">
                        <p-button label="Github" type='button' class='p-button-raised' icon="pi w-1rem pi-github" />
                    </nuxt-link>

                    <nuxt-link to="https://t.me/Kicshikxo" target="blank" class="no-underline">
                        <p-button label="Telegram" type='button' class='p-button-outlined'
                            icon="pi w-1rem pi-telegram" />
                    </nuxt-link>
                </div>
            </section>
        </div>
        <div class='col-12 md:col-6 overflow-hidden'>
            <nuxt-img width="1318" height="1080" class="w-full h-auto" src='/images/hero.webp' alt='hero-image'
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

.hello-emoji {
    animation: shake 1.8s infinite;
    transform-origin: 70% 70%;
}

@keyframes shake {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(-10deg);
    }

    20% {
        transform: rotate(12deg);
    }

    30% {
        transform: rotate(-10deg);
    }

    40% {
        transform: rotate(9deg);
    }

    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>