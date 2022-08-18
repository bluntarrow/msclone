<template>
  <div
    class="bg-zinc-800 rounded h-full pt-12 flex flex-col items-center"
  >
    <img
      :src="app.img"
      class="w-36 aspect-square rounded object-cover"
      alt=""
    />
    <h1 class="text-2xl font-semibold mt-4">{{ app.title }}</h1>
    <h3 class="text-sm text-blue-400 underline">{{ app.title }} inc.</h3>
    <button
      class="mt-6 w-max py-1 px-16 text-sm bg-blue-400 text-black rounded"
    >
      Open
    </button>
    <!-- <p class="w-1/2 text-center mt-3 text-xs">
        This app requires the latest version of Microsoft Edge.
      </p> -->
    <div class="flex mt-8 gap-6 capitalize">
      <div class="text-center">
        <div class="flex justify-center items-center">
          3.6 <StarIcon class="h-5 text-yellow-600"></StarIcon>
        </div>
        <span class="text-xs text-zinc-500">average</span>
      </div>
      <div class="border-r"></div>
      <div class="text-center">
        2K <br />
        <span class="text-xs text-zinc-500">ratings</span>
      </div>
    </div>
    <div class="w-max mt-8 rounded-2xl py-1 px-6 bg-zinc-600/25 text-sm">
      Social
    </div>
    <div class="h-full w-full flex justify-between items-end p-4">
      <div class="flex gap-2">
        <div
          class="h-10 w-10 text-lg flex justify-center items-center font-bold bg-white text-black"
        >
          12+
        </div>
        <div class="text-xs">
          <span class="underline">12+</span>
          <div
            class="text-zinc-500 mt-1"
            style="font-size: 10px; line-height: 10px"
          >
            Parental Guidance Reccomended <br />
            Shares Location, Users Interact
          </div>
        </div>
      </div>
      <ExternalLinkIcon class="h-4 mb-1"></ExternalLinkIcon>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { StarIcon, ExternalLinkIcon } from "@heroicons/vue/solid";

const store = useStore();
const route = useRoute();

const app = computed(() => store.state.apps).value[route.params.id];
</script>
