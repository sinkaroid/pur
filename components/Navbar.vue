<script setup>
  
import { useDark, useToggle } from '@vueuse/core'
const isNavbarOpen = ref(true)

onBeforeMount(() => {
  if(document.body.clientWidth < 768) {
    isNavbarOpen.value = false
  }
})

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)


</script>
<template>
  <nav class="fixed top-0 z-10 w-full bg-white dark:bg-neutral-900">
    <div class="container py-3 md:py-0 max-w-3xl mx-auto flex flex-row items-center justify-between px-5 lg:px-0 ">
      <a title="Home" class="text-xl md:text-2xl font-bold no-underline dark:text-green-500" href="/">ELAINA</a>
      <ul class="text-sm md:text-base flex list-none  m-0 p-0">
        <li>
          <a title="About Us" class="px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500" href="/about">About</a>
        </li>
        <li>
          <a title="Project & Client" class="px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500" href="/client">Client</a>
          </li>
        <li>
          <a title="Hire me" class="px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500" href="/contact">Contact</a>
          </li>
          <li>
            <a href="#"  class="px-2 md:px-4 block py-2 md:py-4 font-bold no-underline" @click.prevent="toggleDark()">
              <div class="i-mdi-weather-night align-middle mt-1" v-if="isDark == false"></div>
            <div class="i-mdi-white-balance-sunny align-middle mt-1 text-yellow-500" v-else></div>
          </a>
          </li>
        </ul>
          </div>
          </nav>
  
</template>
<style lang="postcss">
.navbar__link {
  padding: 0.5rem;
  text-decoration: none;
}
.navbar__link.router-link-active {
  @apply dark:text-gray-50;
  border-bottom: 1px solid;
}
</style>