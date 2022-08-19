<script setup lang="ts">
import TabPane from '~~/components/Tabs/TabPane.vue';
import TabContent from '~~/components/Tabs/TabContent.vue';
import { useProjectsStore } from '~~/store/data/projects';
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Client',
})
const showTab = ref('opensource')

const store = useProjectsStore()
const openSource = computed(() => store.projects.filter((p) => p.opensource))
const closedSource = computed(() => store.projects.filter((p) => !p.opensource))

console.log(store.projects)
</script>
<template>
<section class="content">
  <div class="container mx-auto max-w-[75ch]!">
    <div class="prose">
      <h1 class="text-center">Clients</h1>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>
      <Tabs>
        <tab-content name="open" text="Project">
          <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5">
            <Card v-for="(project, index) in openSource" :key="index"
              :title="project.title"
              :image="project.image"
              :description="project.description"
              :github="project.github_url"
              :opensource="project.description"
              class="w-full"
              >
            </Card>
          </div>
        </tab-content>
        <tab-content name="closed" text="Client">
          <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 py-5">
            <Card v-for="(project, index) in closedSource" :key="index"
              :title="project.title"
              :image="project.image"
              :description="project.description"
              class="w-full"
              >
            </Card>
          </div>
        </tab-content>
      </Tabs>
    </div>
  </div>
</section>
</template>
