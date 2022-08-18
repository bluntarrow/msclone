<template>
  <!-- categories -->
  <div class="flex py-4 px-10 w-full justify-between">
    <ul class="flex gap-2">
      <li
        class="border rounded-2xl py-1 px-10 text-sm capitalize first-of-type:text-blue-500 first-of-type:border-blue-500 text-zinc-300 border-zinc-600"
        v-for="category in categories"
      >
        {{ category }}
      </li>
    </ul>
    <select
      class="p-1 bg-zinc-700/50 text-zinc-300 text-sm rounded outline-none"
    >
      <option value="">Sort by date</option>
    </select>
  </div>

  <!-- apps list -->
  <section class="px-10">
    <div
      class="w-full bg-zinc-700/50 p-2 rounded grid grid-cols-4 items-center mb-4"
      v-for="(app, i) in apps"
    >
      <div class="flex gap-2">
        <router-link :to="'/apps/' + i">
          <img :src="app.img" class="aspect-square object-cover h-14" alt="" />
        </router-link>
        <div>
          <router-link :to="'/apps/' + i">{{ app.title }}</router-link> <br />
          <span class="text-zinc-400 text-xs">{{ app.title }} inc.</span>
        </div>
      </div>
      <div class="">Apps</div>
      <div class="">Purchased 10/8/2021</div>
      <div class="justify-self-end flex">
        <button class="bg-zinc-600/50 px-6 py-1 rounded text-sm">Open</button>
        <DotsHorizontalIcon class="h-6 ml-4 mr-2"></DotsHorizontalIcon>
      </div>
    </div>
  </section>
</template>
<script setup>
import { DotsHorizontalIcon } from "@heroicons/vue/solid";
import { computed } from "vue";
import { useStore } from "vuex";

const categories = ["all", "apps", "games", "movies & TV"];
const store = useStore();
let apps = computed(() => store.state.apps);
</script>
