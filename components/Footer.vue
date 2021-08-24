<template>
    <div>
        <div class="flex justify-around text-center py-4 px-12">
            <ul class="list-none">
                <li>
                    <NuxtLink class="hover:underline" to="/imprint">Impressum</NuxtLink>
                </li>
                <li>
                    <a class="hover:underline" target="_blank" href="https://github.com/SayHeyD">GitHub</a>
                </li>
                <li>
                    <a class="hover:underline" target="_blank" href="https://www.linkedin.com/in/david-docampo-47a9581a2/">LinkedIn</a>
                </li>
            </ul>
        </div>
        <div class="flex w-full py-2 text-sm justify-center items-center">
            <p>© {{ new Date().getFullYear() }} - David Docampo</p>
        </div>
    </div>
</template>

<script>

</script>
