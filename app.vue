<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Memek` : 'Memek';
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { hid: 'description', name: 'description', content: 'Test Nuxt 3' }
  ]
})

</script>
<style src="@vueform/toggle/themes/default.css"></style>
<template>




  <div id="app" class="min-h-screen">
    <NuxtLayout>
  
      <NuxtPage/>
      
    </NuxtLayout>
</div>
  
</template>
