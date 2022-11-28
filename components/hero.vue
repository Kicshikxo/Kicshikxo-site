<template>
    <div class='grid grid-nogutter surface-section text-800 min-h-screen align-items-center'>
        <div class='col-12 md:col-6 p-6 text-center md:text-left'>
            <section>
                <div class="text-6xl font-bold flex flex-column">
                    <div class='text-6xl font-bold mb-1'>Привет, я <span class="text-primary">Kicshikxo</span></div>
                    <div class='text-5xl font-medium mb-1'>и я начинающий разработчик</div>
                </div>

                <p class='mt-1 mb-4 text-700 text-2xl'>Этот веб-сайт расскажет обо мне</p>

                <nuxt-link to="https://github.com/Kicshikxo" target="blank" class="no-underline">
                    <p-button label="Github" type='button' class='mr-3 p-button-raised' icon="pi pi-github" />
                </nuxt-link>

                <nuxt-link to="https://t.me/Kicshikxo" target="blank" class="no-underline">
                    <p-button label="Telegram" type='button' class='p-button-outlined' icon="pi pi-telegram" />
                </nuxt-link>
            </section>
        </div>
        <div class='col-12 md:col-6 overflow-hidden'>
            <img width="100%" src='/images/hero.webp' alt='Image'
                style='clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' />
        </div>
    </div>
</template>