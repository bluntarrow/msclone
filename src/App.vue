<script setup>
import { useStore } from "vuex";

import { computed } from "vue";
import Toolbar from "./components/app/Toolbar.vue";
import Leftnav from "./components/app/Leftnav.vue";

const store = useStore();

const start = () => store.commit("startup");
start();
</script>

<template>
  <div class="h-[100vh] overflow-hidden">
    <Toolbar></Toolbar>
    <div class="flex w-full h-full text-zinc-50 pb-10 bg-zinc-900 overflow-hidden">
      <Leftnav></Leftnav>
      <div class="bg-zinc-800 h-full rounded-tl basis-auto overflow-y-scroll">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
