<template>
    <div>
        <Hero />
        <Repos />
        <!-- <Feature /> -->
        <Footer />
        <PScrollTop class="custom-scrolltop" />
    </div>
</template>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop):hover {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop) .p-scrolltop-icon {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>