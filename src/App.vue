<template>
    <div class="flex">
        <div class="w-1/4"></div>
        <nav class="w-3/4 transform bg-gray-200 duration-300 flex justify-between" :class="{'translate-x-11/12': !open}">
            <div class="flex justify-center items-center text-xl w-1/12 cursor-pointer" v-text="open ? '>' : '<'" @click="toggleMenu"></div>
            <div class="flex-1 flex justify-center">
                <p class="hover:underline py-2 mr-2">
                    <router-link class="h-full" :to="{name: 'Home'}">Home</router-link>
                </p>
                <p class="hover:underline py-2">
                    <router-link class="h-full" :to="{name: 'Contact'}">Contact</router-link>
                </p>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleMenu()
        {
            this.open = !this.open
        }
    }
}
</script>
