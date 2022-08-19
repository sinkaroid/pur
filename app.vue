<script setup>
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
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
