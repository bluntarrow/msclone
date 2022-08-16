<template>
  <div class="grid grid-cols-3 h-full py-2 gap-2">
    <div class="bg-zinc-800 rounded h-full pt-16 flex flex-col items-center">
      <img
        :src="app.img"
        class="w-40 aspect-square rounded object-cover"
        alt=""
      />
      <h1>{{ app.title }}</h1>
      <h3>{{ app.title }} inc.</h3>
      <button>open</button>
      <p>This app requires the latest version of Microsoft Edge</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const app = computed(() => store.state.apps).value[route.params.id];
</script>
