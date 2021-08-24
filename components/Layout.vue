<template>
    <div class="h-full">
        <main class="bg-gray-100 text-gray-900">
            <Navigation class="bg-gray-700 text-gray-100 relative z-10" />
            <slot class="relative z-0" />
        </main>
        <footer class="bg-gray-700 text-gray-100 relative z-10">
            <Footer />
        </footer>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

export default {
    components: {
        Navigation,
        Footer,
    }
}
</script>

<style>
html {
    background-color: #374151;
}
</style>