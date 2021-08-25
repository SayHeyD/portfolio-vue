<template>
    <nav class="flex justify-between overflow-y-hidden">
        <div class="flex justify-center items-center">
            <h1 class="ml-4 font-semibold text-2xl">Portfolio</h1>
        </div>
        <div class="flex transform duration-500" :class="{'translate-x-navigation': !open}">
            <div class="flex p-4 mr-2 text-green-500 cursor-pointer justify-center items-center" @mouseover="underlineMenuText = true"
                @mouseout="underlineMenuText = false"
                @click="toggleMenu">

                <ArrowLeft class="h-6 w-6 mr-2 transform duration-300 cursor-pointer"
                :class="{'rotate-180': open}" />
                <p v-if="open" :class="{'underline': underlineMenuText}">Collapse Menu</p>
                <p v-else :class="{'underline': underlineMenuText}">Expand Menu</p>
            </div>
            <ul class="flex flex-1 justify-between w-3/4 list-none">
                <li class="h-full flex justify-center items-center mx-4">
                    <NuxtLink class="text-xl inline-block w-full h-full py-4 border-b-2 hover:border-white"
                        :class="[$route.name === 'index' ? 'border-white' : 'border-transparent']"
                        to="/">Home</NuxtLink>
                </li>
                <li class="h-full flex justify-center items-center mx-4">
                    <NuxtLink class="text-xl inline-block w-full h-full py-4 border-b-2 hover:border-white"
                        :class="[$route.name === 'certificates' ? 'border-white' : 'border-transparent']"
                        to="/certificates">Certificates</NuxtLink>
                </li>
                <li class="h-full flex justify-center items-center mx-4">
                    <NuxtLink class="text-xl inline-block w-full h-full py-4 border-b-2 hover:border-white"
                        :class="[$route.name === 'resume' ? 'border-white' : 'border-transparent']"
                        to="/resume">Resume</NuxtLink>
                </li>
                <li class="h-full flex justify-center items-center mx-4">
                    <NuxtLink class="text-xl inline-block w-full h-full py-4 border-b-2 hover:border-white"
                        :class="[$route.name === 'contact' ? 'border-white' : 'border-transparent']"
                        to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import ArrowLeft from './Icons/ArrowLeft.vue'

export default {
    components: {
        ArrowLeft,
    },
    data() {
        return {
            underlineMenuText: false,
        } 
    },
    computed: {
        open() {
            return this.$store.state.app.open
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('app/toggleMenu')
        }
    }
}
</script>
