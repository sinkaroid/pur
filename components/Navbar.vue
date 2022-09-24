<script setup>
const isNavbarOpen = ref(true)
import { useDark, useToggle } from '@vueuse/core'

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
  <nav>
    <div class="navbar__brand | italic text-center flex justify-center py-3">
      <div class='w-1/3'></div>
  
      <div class='w-1/3'>
        <button class="p-2 bg-transparent border-none md:hidden inline-block" type="button" name="toggle-menu" aria-label="Toggle Menu" @click="isNavbarOpen=!isNavbarOpen">
          <div class="i-mdi-menu"></div>
        </button>
      </div>
    </div>
    <div class="navbar__menu">
      <ul class="flex decoration-none list-none gap-5 justify-center p-0 flex-col md:flex-row text-right pr-8 lg:p-0 lg:text-center"  v-show="isNavbarOpen">
       <li class="navbar__item">
          <nuxt-link to="/" class="navbar__link font-bold dark:text-green-600">Si memek 👋</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/about" class="navbar__link font-bold dark:text-green-600">About</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/client" class="navbar__link font-bold dark:text-green-600">Clients</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/contact" class="navbar__link font-bold dark:text-green-600">Contact</nuxt-link>
        </li>
        <li class="navbar__item">
          <a href="#" class="navbar__link | p-0! float-right" @click.prevent="toggleDark()">
            <div class="i-mdi-weather-night" v-if="isDark == false"></div>
            <div class="i-mdi-white-balance-sunny" v-else></div>
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