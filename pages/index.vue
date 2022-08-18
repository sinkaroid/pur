<template>
  <div class="container">
    <div class='flex flex-col mx-auto mt-64 text-center'>
      <h1 class="title" align="center">
        Hai, Saya Memek 👋
      </h1>
      <p class='text-8xl' align="left"><span class='text-green-600'>Test ngentot purr purrTest ngentot purr purrTest ngentot purr purrTest ngentot purr purrTest ngentot purr purr</span></p>
      <br>
      <h1 class="project" align="left">
        Project Unggulan
      </h1>
   <div class="page-body" align="left">
        <div v-for="(repo,index) in $store.state.repo" :key="index">
              <a href:target="_blank" :href="repo.link"><h5 class='ml-2 text-xl mt-5 mb-2 font-medium text-gray-800'>{{repo.name}}</h5></a>
              - {{repo.description}}</div>
            </div>
        </div>


  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.socmed:hover {
  transform: translateY(-10px)
}
.image img {
  filter: drop-shadow(0 10px 30px #ccc)
}

.title {
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.project {
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
