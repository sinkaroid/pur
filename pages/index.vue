<script setup>
import e from './../store/data/emoji.json';
import i from './../store/data/icon.json';

definePageMeta({
  layout: "main",
});
useHead({
  title: "Home",
});

const isNavbarOpen = ref(true);

onBeforeMount(() => {
  if (document.body.clientWidth < 768) {
    isNavbarOpen.value = false;
  }
  
});

function emoji() {
  return e[Math.floor(Math.random() * e.length)];
}

function icon() {
  return i[Math.floor(Math.random() * i.length)];
}

let blog = [
  {
    icon: icon(),
    title: "aku-depresi-dan-bunuhdiri-kemudian-berada-multiverse-lain",
  },
  { icon: icon(), title: "cara-mendapatkan-kekuatan-anime" },
  { icon: icon(), title: "mendalami-karakter-anime" },
  { icon: icon(), title: "hukum-bersetubuh-dengan-anime" },
  { icon: icon(), title: "hukum-menikahi-anime" },
  { icon: icon(), title: "cara-menghina-pedo-dan-furry" },
  {
    icon: icon(),
    title: "cara-menjadi-top-global-gilgamesh-hidup-seperti-lort-anime",
  },
];

let portfolio = [
  { icon: icon(), title: "cara-mendapatkan-kekuatan-anime" },
  { icon: icon(), title: "mendalami-karakter-anime" },
  { icon: icon(), title: "hukum-bersetubuh-dengan-anime" },
  { icon: icon(), title: "hukum-menikahi-anime menurut" },
  { icon: icon(), title: "cara-menghina-pedo-dan-furry" },
  {
    icon: icon(),
    title: "cara-menjadi-top-global-gilgamesh-hidup-seperti-lort-anime",
  },
];

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr
    .join(" ")
    .replace(/-/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());
}

</script>
<template>
  <section class="content">
    <div class="container mx-auto">
      
      <div class="w-full mb-5 p-2">
        
        <h2 style="margin-bottom:0px !important" class="text-left">Elaina (イレイナ, Ireina) 👋</h2>
        <img src="https://i.pinimg.com/originals/27/88/86/278886d6594b0a37f48bc1856c7da210.png" alt="" class="shadow rounded-full max-w-full h-auto align-middle border-none w-35 mr-5 mt-10 ml-10 float-right"/>
        <p class="dark:text-green-400 font-bold text-left">The Ashen Witch</p>
        <p class="mb-2 text-left pb-4 mr-10">Elaina has an advance knowledge and usage with regards to magic. She was able to undo damages from certain objects, heal wounds, combat others, such as Fran who was a more experienced and skilled witch.</p>
   
      </div>
      <br>
  
      <h2 class="text-left dark:text-green-500  mb-7">Featured posts <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 float-right">See more</span></h2>
      <div v-for="item in blog" class="flex flex-wrap -mx-2">
        <div class="w-full px-2">
          <div class="card mb-3">
      
            <div class="card__content align-middle">
               <nuxt-link :to="'blog/' + item.title" class="no-underline">
                <img :src="item.icon" class="w-5" />{{ " " + titleCase(item.title) }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
   
  <br><br><br>
      <h2 class="text-left dark:text-green-500 mb-7">Portfolio <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 float-right">See more</span></h2>
      <div v-for="item in portfolio" class="flex flex-wrap -mx-2">
        <div class="w-full px-2">
          <div class="card mb-3">
      
            <div class="card__content align-middle">
               <nuxt-link :to="'blog/' + item.title" class="no-underline">
                <img :src="item.icon" class="w-5" />{{ " " + titleCase(item.title) }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div> 
        
    </div>
    
  </section>
  </template>
