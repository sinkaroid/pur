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

let blog = [
  {"icon": "👾", "title": "cara-mendapatkan-kekuatan-anime"},
  {"icon": "🤖", "title": "mendalami-karakter-anime sedalam lautan"},
  {"icon": "💥", "title": "hukum-bersetubuh-dengan-anime secara paksa"},
  {"icon": "🐧", "title": "hukum-menikahi-anime menurut agama jawa"},
  {"icon": "🕊️", "title": "cara-menghina-pedo-dan-furry mak jleb"},
  {"icon": "🦚", "title": "cara-menjadi-top-global-gilgamesh-hidup-seperti-lort-anime"}
]


let portfolio = [
  {"icon": "✅", "title": "cara-mendapatkan-kekuatan-anime"},
  {"icon": "✅", "title": "mendalami-karakter-anime sedalam lautan"},
  {"icon": "✅", "title": "hukum-bersetubuh-dengan-anime secara paksa"},
  {"icon": "✅", "title": "hukum-menikahi-anime menurut agama jawa"},
  {"icon": "✅", "title": "cara-menghina-pedo-dan-furry mak jleb"},
  {"icon": "✅", "title": "cara-menjadi-top-global-gilgamesh-hidup-seperti-lort-anime"}
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
      
      <h1 style="margin-bottom:0px !important" class="text-center">Hello, My Name Jokowi 👋</h1>
      <p class="dark:text-green-400 text-center">Presiden Republik Indonesia</p>
      <p class="mb-2 text-center">Hello👋, I'm Jokowi<br>a guy who loves to code, music and coffee. Welcome to my personal website, where you can find my portfolio, blog and more.</p>
 
    </div>
      <br><hr class="bg-white-400 dark:bg-neutral-700"><br>
    <h2 class="text-left dark:text-green-500 ml-0">📖 Featured posts <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 float-right">See more</span></h2>
    <div v-for="item in blog" class="flex flex-wrap -mx-2 p1">
      <div class="w-full px-2">
        <div class="card mb-3">
    
          <div class="card__content">
             <nuxt-link :to="'blog/' + item.title" class="no-underline">{{ titleCase(item.icon + " " + item.title) }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <br><hr class="bg-white-400 dark:bg-neutral-700"><br>
    <h2 class="text-left dark:text-green-500">📝 Portfolio <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 float-right">See more</span></h2>

    <div v-for="item in portfolio" class="flex flex-wrap -mx-2 p-1">
      <div class="w-full px-2">
        <div class="card mb-3">
    
          <div class="card__content divide-y-2">
             <nuxt-link :to="'blog/' + item.title" class="no-underline">{{ titleCase(item.icon + " " + item.title) }}</nuxt-link>
          </div>
        </div>
      </div>
    </div> 
      
  </div>
  
</section>
</template>

<style>


.icon {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  overflow: hidden;

}
</style>
