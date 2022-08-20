<script setup>
const Title = "Mendalami Karakter Anime"
definePageMeta({
  layout: "main",
});
useHead({
  title: Title,
})

</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="section__header | text-center">
      <h1 class='section__title'>{{ Title }}</h1>
    </div>
<p align="center">
<img src="https://lh3.googleusercontent.com/-2q5xOhApNK8/XvDMjLyg_BI/AAAAAAAAHvw/HJrA-s16Vo4BftnFvLZi73tRL5pVKbgFgCLcBGAsYHQ/s1600/1592839306156739-0.png" class="responsive">
</p>
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br><br>
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
<br><br>
<nuxt-link to="/">Go back</nuxt-link>
</div>

</section>
</template>

<style>
.avatar {
  border-radius: 50%;
}
</style>
