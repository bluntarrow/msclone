<template>
  <div
    class="bg-zinc-900 h-full w-16 flex flex-col items-center justify-between text-zinc-500 p-2"
  >
    <router-link
      to="/home"
      class="flex justify-center items-center w-max p-3 rounded-md hover:bg-zinc-700/50"
    >
      <HomeIcon class="h-6"></HomeIcon>
    </router-link>

    <ul>
      <router-link
        to="/library"
        class="flex justify-center items-center w-max p-3 rounded-md mb-2 hover:bg-zinc-700/50"
      >
        <CollectionIcon class="h-6"></CollectionIcon>
      </router-link>
      <router-link
        to="/help"
        class="flex justify-center items-center w-max p-3 rounded-md hover:bg-zinc-700/50"
      >
        <QuestionMarkCircleIcon class="h-6"></QuestionMarkCircleIcon>
      </router-link>
    </ul>
  </div>
</template>
<script setup>
import {
  HomeIcon,
  CollectionIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/outline";
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .router-link-active,
  .router-link-exact-active {
    @apply bg-zinc-700/25 border-b border-blue-600
  }
}
</style>
