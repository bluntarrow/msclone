<template>
  <section class="mt-[5%]">
    <section>
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl">Top Free Apps</h1>
        <div class="text-xs capitalize">see all</div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div
          class="rounded bg-zinc-900/50 hover:bg-zinc-900/75 p-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          v-for="i in 6"
        >
          <div class="flex w-full gap-6 justify-start">
            <img
              :src="apps[i - 1].img"
              class="h-20 w-20 object-cover rounded"
              alt=""
            />

            <ul class="font-semibold">
              <li>{{ apps[i - 1].title }}</li>
              <li class="text-xs text-zinc-400 capitalize">Social</li>
              <li class="flex gap-1 pt-2">
                <StarIcon v-for="a in 5" class="h-4"></StarIcon>
              </li>
            </ul>
            <div class="ml-auto text-sm capitalize">free</div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl">Top Paid Apps</h1>
        <div class="text-xs capitalize">see all</div>
      </div>
      <div class="grid grid-cols-6 gap-4 mt-4">
        <div
          class="rounded bg-zinc-900/50 hover:bg-zinc-900/75 p-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          v-for="i in 6"
        >
          <div class="flex flex-col w-full gap-6 justify-start">
            <img
              :src="apps[i - 1].img"
              class="aspect-square object-cover rounded"
              alt=""
            />

            <ul class="font-semibold">
              <li>{{ apps[i - 1].title }}</li>
              <li class="text-xs text-zinc-400 capitalize">Social</li>
              <li class="flex gap-1 pt-2">
                <StarIcon v-for="a in 5" class="h-4"></StarIcon>
              </li>
            </ul>
            <div class="text-sm capitalize">free</div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import { StarIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const apps = computed(() => store.state.apps);
</script>
