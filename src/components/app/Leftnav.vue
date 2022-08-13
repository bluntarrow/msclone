<template>
  <div
    class="bg-zinc-900 h-full w-16 flex flex-col items-center justify-between text-zinc-500 p-2"
  >
    <router-link to="/">
      <div
        class="flex justify-center items-center w-max p-4 rounded-md hover:bg-zinc-700/50"
      >
        <HomeIcon class="h-6"></HomeIcon>
      </div>
    </router-link>

    <ul>
      <router-link to="/library">
        <div
          class="flex justify-center items-center w-max p-4 rounded-md hover:bg-zinc-700/50"
        >
          <CollectionIcon class="h-6"></CollectionIcon>
        </div>
      </router-link>
      <router-link to="/help">
        <div
          class="flex justify-center items-center w-max p-4 rounded-md hover:bg-zinc-700/50"
        >
          <QuestionMarkCircleIcon class="h-6"></QuestionMarkCircleIcon>
        </div>
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
