<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Home',
})

const isNavbarOpen = ref(true)

onBeforeMount(() => {
  if(document.body.clientWidth < 768) {
    isNavbarOpen.value = false
  }
})

let rilisan = [
  "cara-mendapatkan-kekuatan-anime",
  "hukum-bersetubuh-dengan-anime",
  "mendalami-karakter-anime",
  "hukum-menikahi-anime",
  "cara-menjadi-top-global-gilgamesh-hidup-seperti-lort-anime"
]


function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' ').replace(/-/g, " ").toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-left">Hai, Saya memek 👋</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br><br>
    <nuxt-link to="/about" class="selengkapnya">Selengkapnya tentang si memek</nuxt-link></div>
    <br><br>
    <h2>Tulisan Terbaru</h2>
    <div v-for="(rilisan,index) in rilisan" class="flex flex-wrap -mx-2">
      <div class="w-full px-2">
        <div class="card">
    
          <div class="card__content">
             <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/memo_1f4dd.png" class="icon"><nuxt-link :to="'blog/' + rilisan" class="selengkapnya">{{ titleCase(rilisan) }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
            
  </div>
</section>
</template>

<style>
a.selengkapnya{display:inline-block;padding:.4rem .6rem;background:#f2f2f2;border-radius:4px;color:#5a5a5a;font-size:1rem;font-weight:500}

.icon {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  overflow: hidden;

}
</style>
